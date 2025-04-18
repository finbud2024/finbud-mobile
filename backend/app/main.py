from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="AutoTrade API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For production, set specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to AutoTrade API"}
    
@app.get("/api/health")
async def health_check():
    return {"status": "healthy"}

# Import and include routers
# from app.routers import strategies, investments, market
# app.include_router(strategies.router, prefix="/api", tags=["strategies"])
# app.include_router(investments.router, prefix="/api", tags=["investments"])
# app.include_router(market.router, prefix="/api", tags=["market"]) 