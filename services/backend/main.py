from fastapi import FastAPI
import uvicorn
from uuid import uuid4
import os
import polars as pl
from typing import Annotated, List, Optional
from pydantic import BaseModel
import pandas as pd
from fastapi.responses import JSONResponse
from db import *

engine = create_engine(DB_URL)
metadata.create_all(engine)

dataprofile = pl.read_csv('data/ev3_dataprofile.csv')
data1000k = pl.read_csv('data/data1000k.csv')
data1000k = data1000k.drop_nans()
# sort by sample_time
data1000k = data1000k.sort("sample_time")

app = FastAPI()


@app.on_event("startup")
async def startup():
    await database.connect()
    if os.path.exists('tmp/') and os.path.isdir('tmp/'):
        os.rmdir("tmp/")

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

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




# sample code

class Exercise(BaseModel):
    id: str
    exercise: str
    description: str


@app.post("/add_exercise")
async def add_exercise(exercise: Exercise):
    await database.execute(Exercisedata1000k.insert(), {'id': str(uuid4()), 'exercise': exercise.exercise, 'description': exercise.description})
    return "worked"


if __name__ == '__main__':
    uvicorn.run(app, host="127.0.0.1", port=8000)