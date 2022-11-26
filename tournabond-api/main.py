import os
import requests
import json
import uvicorn
from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from schema import Contractchema
from models import ContractModel
from db import get_db


TEZOS_API_URL = os.getenv("TEZOS_API_URL", "https://api.ghostnet.tzkt.io")

app = FastAPI()

@app.post("/api/contracts/", response_model=Contractchema)
async def create_contract(contract: Contractchema, db: Session = Depends(get_db)):
    response = requests.get(f"{TEZOS_API_URL}/v1/contracts?creator={contract.contract_address}")

    if response.status_code == 200:
        print(response.json())
        if False:
            _contract = ContractModel(
                owner_address=contract.owner_address, contract_address=contract.contract_address
            )
            db.add(_contract)
            db.commit()
            db.refresh(_contract)
            return _contract

    return []


@app.get("/api/contracts/", response_model=Contractchema)
async def get_user(owner_address: str, db: Session = Depends(get_db)):
    contracts = db.query(ContractModel).filter_by(owner_address=owner_address).all()
    print(f"RESULT: {contracts}")
    return contracts

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8001)