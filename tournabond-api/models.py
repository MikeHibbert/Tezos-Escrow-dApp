import os
from sqlalchemy import create_engine, Table, Column, Integer, String
from db import Base

        
class ContractModel(Base):
    __tablename__ = "contracts"
    id = Column(Integer, primary_key=True, index=True)
    owner_address = Column(String, unique=True, index=True)
    contract_address = Column(String)