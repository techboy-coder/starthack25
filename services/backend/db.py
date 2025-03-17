from databases import Database
from sqlalchemy import  create_engine, MetaData, Table, Column, Integer, String



DB_URL = "postgresql+psycopg2://myuser:mypassword@localhost/mydb"

database = Database(DB_URL)
metadata = MetaData()

UsersTable = Table(
    "users",
    metadata,
    Column("id", String, nullable=False, primary_key=True),
    Column("username", String, nullable=False),
    Column("password", String, nullable=False)
)

UsersTable = Table(
    "exercises",
    metadata,
    Column("id", String, nullable=False, primary_key=True),
    Column("exercise", String, nullable=False),
    Column("description", String, nullable=False)
)


engine = create_engine(DB_URL)
metadata.create_all(engine)