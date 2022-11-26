from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from main import SQLALCHEMY_DATABASE_URL

engine = create_engine(SQLALCHEMY_DATABASE_URL, echo=True)
Base = declarative_base()

Base.metadata.create_all(engine)