from pydantic import BaseModel

class Contractchema(BaseModel):
    owner_address: str
    contract_address: str

    class Config:
        orm_mode = True