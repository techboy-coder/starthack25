from fastapi import FastAPI
from db import *
import uvicorn
from uuid import uuid4
import os
from typing import Annotated, List, Optional
from pydantic import BaseModel
import pandas as pd
from fastapi.responses import JSONResponse

engine = create_engine(DB_URL)
metadata.create_all(engine)

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
    table = pd.read_csv('data/ev3_device_data.csv')
    ids = table['device_id'].drop_duplicates().tolist()
    return ids


@app.get("/get")
def get_data(id: str, limit: int = 10, skip: int = 0):
    table = pd.read_csv('data/ev3_device_data.csv')
    filtered_data = table[table['device_id'] == id]

    # Remove NaN values
    filtered_data = filtered_data.fillna("")  # Replace NaN with empty string

    result = filtered_data.iloc[skip:skip + limit].to_dict(orient="records")

    return result 


@app.get("/columns")
def get_data():
    # take the csv from data/ev3_dataprofile.csv and return is as json
    table = pd.read_csv('data/ev3_dataprofile.csv')
    # Remove NaN values
    filtered_data = table.fillna("")  # Replace NaN with empty string
    return filtered_data.to_dict(orient="records")




# sample code

class Exercise(BaseModel):
    id: str
    exercise: str
    description: str


@app.post("/add_exercise")
async def add_exercise(exercise: Exercise):
    await database.execute(ExerciseTable.insert(), {'id': str(uuid4()), 'exercise': exercise.exercise, 'description': exercise.description})
    return "worked"


if __name__ == '__main__':
    uvicorn.run(app, host="127.0.0.1", port=8000)