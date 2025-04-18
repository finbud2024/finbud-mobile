from fastapi import APIRouter, HTTPException
from typing import List, Dict, Any
from ..services.market_service import MarketService

router = APIRouter()

@router.get("/market/quote/{symbol}")
async def get_stock_quote(symbol: str) -> Dict[str, Any]:
    """Get current stock price and related information"""
    try:
        return await MarketService.get_stock_quote(symbol)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching quote: {str(e)}")

@router.get("/market/history/{symbol}")
async def get_historical_data(symbol: str, period: str = "1mo") -> List[Dict[str, Any]]:
    """Get historical stock data
    
    Args:
        symbol: Stock symbol
        period: Valid periods: 1d,5d,1mo,3mo,6mo,1y,2y,5y,10y,ytd,max
    """
    try:
        return await MarketService.get_historical_data(symbol, period)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching historical data: {str(e)}")

@router.get("/market/search")
async def search_stocks(query: str) -> List[Dict[str, Any]]:
    """Search for stocks matching the query"""
    try:
        return await MarketService.search_stocks(query)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error searching stocks: {str(e)}") 