

from pydantic import BaseModel
from typing import List
from fastapi import FastAPI
import uvicorn
import os
import polars as pl
from typing import List
from pydantic import BaseModel
from fastapi.responses import JSONResponse

import ollama
import polars as pl
from typing import List

dataprofile = pl.read_csv('data/ev3_dataprofile.csv')
data1000k = pl.read_csv('data/data1000k.csv')
data1000k = data1000k.drop_nans()
# sort by sample_time
data1000k = data1000k.sort("sample_time")

data1000k = data1000k.drop_nans()


SYSTEM_PROMPT = """
You are an expert in HVAC systems and digital asset monetization, representing Belimo. You are given a X and Y downsampled dataset along with an ID descr. Return some sort of data driven meaning. You are expert and therefore always answer a conclusive answer, you may make it up too. Keep the answer brief and below 4 sentences. Do not say the data from X or Y or downsampled, just say from the data...
"""

# Py constant for Ollama serve endpoint
OLLAMA_HOST = "http://localhost:11434"  # Default Ollama port

# Initialize the Ollama client using the constant
client = ollama.Client(host=OLLAMA_HOST)


def askTechRep(query: str, X: List[float], Y: List[str], descriptions: List[str]) -> str:
    messages = [
        {
            "role": "system",
            "content": SYSTEM_PROMPT,
        },
        {
            "role": "user",
            "content": query,
            # Include the data directly in the message content.  This is the most robust way
            # to make sure it is available to the model.
            "context": f"X data: {X}\nY data: {Y}\nDescriptions: {descriptions}",
        },
    ]

    response: ollama.ChatResponse = client.chat(model="llama3.2:1b", messages=messages, stream=False)  #Use a suitable default model here.
    return response.message["content"]




# or access fields directly from the response object
app = FastAPI(root_path="/api")

@app.on_event("startup")
async def startup():
    if os.path.exists('tmp/') and os.path.isdir('tmp/'):
        os.rmdir("tmp/")

@app.get("/getIds")
def get_ids():
    ids = data1000k.select('device_id').unique().to_series().to_list()
    return ids


@app.get("/get")
def get_data(id: str, limit: int = 10, skip: int = 0):
    
    # Filter data by 'device_id' column
    filtered_data = data1000k.filter(pl.col('device_id') == id)
    
    # Remove NaN values by filling them with empty strings
    filtered_data = filtered_data.fill_nan("")
    
    # Slice the filtered data based on skip and limit, and collect it as a list of dictionaries
    result = filtered_data[skip:skip + limit].to_dicts()

    return result


@app.get("/columns")
def get_columns():
    # Remove NaN values
    filtered_data = dataprofile.fillna("")  # Replace NaN with empty string
    return filtered_data.to_dict(orient="records")


@app.get("/flow_score/{id}")
def flow_score(id: str):
    filtered_data = data1000k.filter(pl.col("device_id") == id)
    
    if filtered_data.is_empty():
        return []  # Return empty list if no data is found

    # Compute score
    score_data = filtered_data.with_columns(
        (pl.when(pl.col("AbsFlow_Fb_m3s") != 0)
        .then(pl.col("AbsPower_Fb_W") / pl.col("AbsFlow_Fb_m3s"))
        .otherwise(pl.lit(0)))  # Set zero if flow is zero
        .alias("score")
    )
    
    # Normalize score to range [0,1]
    min_val = score_data["score"].min()
    max_val = score_data["score"].max()
    
    if min_val == max_val:
        score_data = score_data.with_columns(pl.lit(1.0).alias("score"))  # Avoid division by zero
    else:
        score_data = score_data.with_columns(
            ((pl.col("score") - min_val) / (max_val - min_val)).alias("score")
        )
    
    return score_data.select(["score", "AbsFlow_Fb_m3s"]).to_dicts()



# export async function ask(query: string, X: number[], Y: string[], descriptions: string[]) {
#   const response = await fetch(`${BACKEND_URL}/ask?query=${query}`, {
#     method: 'POST',
#     headers: {
#       'Content-Type': 'application/json'
#     },
#     body: JSON.stringify({X, Y, descriptions})
#   });
#   let result: { response: string } = await response.json();
#   return result;
# }


class AskRequest(BaseModel):
    query: str
    X: List[float]
    Y: List[str]
    descriptions: List[str]


@app.post("/ask")
def ask(request: AskRequest):
    # Access the parameters from the request object
    query = request.query
    X = request.X
    Y = request.Y
    descriptions = request.descriptions
    
    print(f"Received query: {query} and {descriptions}")
    # Call the external function with the extracted parameters
    response = askTechRep(query, X, Y, descriptions)

    print(f"Response: {response}")
    
    return JSONResponse(content={"response": response})

@app.get(app.root_path + "/openapi.json")
def custom_swagger_ui_html():
    return app.openapi()

if __name__ == '__main__':
    uvicorn.run(app, host="127.0.0.1", port=8000)
