from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime
from enum import Enum

class RiskLevel(str, Enum):
    conservative = "conservative"
    moderate = "moderate"
    aggressive = "aggressive"
    
class Status(str, Enum):
    active = "active"
    closed = "closed"

# Strategy Schemas
class StrategyBase(BaseModel):
    name: str
    description: str
    target_return: float
    max_duration: int
    risk_level: RiskLevel

class StrategyCreate(StrategyBase):
    pass

class Strategy(StrategyBase):
    id: int
    created_at: datetime
    
    class Config:
        from_attributes = True

# Investment Schemas
class InvestmentBase(BaseModel):
    symbol: str
    quantity: float
    buy_price: float
    
class InvestmentCreate(InvestmentBase):
    strategy_id: int

class Investment(InvestmentBase):
    id: int
    strategy_id: int
    current_price: Optional[float] = None
    status: Status
    sold_quantity: float = 0
    profit: Optional[float] = None
    created_at: datetime
    updated_at: datetime
    
    class Config:
        from_attributes = True

# Strategy Request Schemas
class StartStrategyRequest(BaseModel):
    amount: float 