from fastapi import FastAPI
from db import *
import uvicorn

engine = create_engine(DB_URL)
metadata.create_all(engine)

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}


if __name__ == '__main__':
    uvicorn.run(app, host="127.0.0.1", port=8000)