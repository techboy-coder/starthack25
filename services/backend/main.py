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

dataprofile = pd.read_csv('data/ev3_dataprofile.csv')
data1000k = pl.read_csv('data/data1000k.csv')

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
    print("penis")
    return ids


@app.get("/get")
def get_data(id: str, limit: int = 10, skip: int = 0):
    # Read CSV file using Polars
    
    
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

from fastapi import FastAPI
import polars as pl

app = FastAPI()

@app.get("/flow_score/{id}")
def flow_score(id: str):
    filtered_data = data1000k.filter(pl.col("device_id") == id)

    # Avoid division by zero
    filtered_data = filtered_data.with_columns(
        pl.when(pl.col("AbsPower_Fb_W") > 0)
        .then(pl.col("AbsFlow_Fb_m3s") / pl.col("AbsPower_Fb_W"))
        .otherwise(0)
        .alias("FlowPowerRatio")
    )

    # Find max ratio (avoid NaN if there are no valid values)
    max_ratio = filtered_data["FlowPowerRatio"].max()
    if max_ratio == 0:
        filtered_data = filtered_data.with_columns(pl.lit(0).alias("Score"))
    else:
        filtered_data = filtered_data.with_columns(
            (pl.col("FlowPowerRatio") / max_ratio).alias("Score")
        )

    result = filtered_data.select(["Score"]).to_dicts()
    return result





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