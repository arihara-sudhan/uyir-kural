from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from utils import KuralHeals

app = FastAPI()
kural = KuralHeals()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/ask/{qn}")
def tellMeHello(qn):    
    resp_matches = kural.ask(qn)
    json_compatible_item_data = jsonable_encoder(resp_matches)
    return JSONResponse(content=json_compatible_item_data)
