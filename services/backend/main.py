from fastapi import FastAPI
from db import *
import uvicorn
from uuid import uuid4
import os
from typing import Annotated, List, Optional
from pydantic import BaseModel

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

@app.get("/")
def read_root():
    return {"Hello": "World"}

class Exercise(BaseModel):
    id: str
    exercise: str
    description: str

@app.get("/exercises", response_model=List[Exercise])
async def get_exercises():
    query = ExerciseTable.select()
    return await database.fetch_all(query)

@app.get("/add_exercise/{exercise}")
async def add_exercise(exercise: str):
    await database.execute(ExerciseTable.insert(), {'id': str(uuid4()), 'exercise': exercise, 'description': 'do push-up'})
    return "worked"

@app.post("/add_exercise")
async def add_exercise(exercise: Exercise):
    await database.execute(ExerciseTable.insert(), {'id': str(uuid4()), 'exercise': exercise.exercise, 'description': exercise.description})
    return "worked"


if __name__ == '__main__':
    uvicorn.run(app, host="127.0.0.1", port=8000)