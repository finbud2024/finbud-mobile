import yfinance as yf
from typing import Dict, List, Optional, Any

class MarketService:
    @staticmethod
    async def get_stock_quote(symbol: str) -> Dict[str, Any]:
        """Get current stock price and related information"""
        try:
            ticker = yf.Ticker(symbol)
            data = ticker.info
            
            # Extract relevant information
            return {
                "symbol": symbol,
                "price": data.get("currentPrice", 0),
                "change": data.get("regularMarketChangePercent", 0),
                "open": data.get("regularMarketOpen", 0),
                "high": data.get("regularMarketDayHigh", 0),
                "low": data.get("regularMarketDayLow", 0),
                "volume": data.get("regularMarketVolume", 0),
                "marketCap": data.get("marketCap", 0),
                "name": data.get("shortName", symbol),
            }
        except Exception as e:
            # Log the error
            print(f"Error fetching quote for {symbol}: {str(e)}")
            # Return minimal data structure
            return {
                "symbol": symbol,
                "price": 0,
                "error": str(e)
            }
    
    @staticmethod
    async def get_historical_data(symbol: str, period: str = "1mo") -> List[Dict[str, Any]]:
        """Get historical stock data
        
        Args:
            symbol: Stock symbol
            period: Valid periods: 1d,5d,1mo,3mo,6mo,1y,2y,5y,10y,ytd,max
        """
        try:
            ticker = yf.Ticker(symbol)
            data = ticker.history(period=period)
            
            # Convert to list of dict for API response
            result = []
            for index, row in data.iterrows():
                result.append({
                    "date": index.strftime("%Y-%m-%d"),
                    "open": row["Open"],
                    "high": row["High"],
                    "low": row["Low"],
                    "close": row["Close"],
                    "volume": row["Volume"]
                })
            
            return result
        except Exception as e:
            # Log the error
            print(f"Error fetching historical data for {symbol}: {str(e)}")
            return []
    
    @staticmethod
    async def search_stocks(query: str) -> List[Dict[str, Any]]:
        """Search for stocks matching the query"""
        try:
            tickers = yf.Tickers(query)
            results = []
            
            for symbol in query.split():
                try:
                    ticker = tickers.tickers.get(symbol)
                    if ticker:
                        info = ticker.info
                        results.append({
                            "symbol": symbol,
                            "name": info.get("shortName", symbol),
                            "price": info.get("currentPrice", 0)
                        })
                except:
                    pass
            
            return results
        except Exception as e:
            # Log the error
            print(f"Error searching stocks for {query}: {str(e)}")
            return [] 