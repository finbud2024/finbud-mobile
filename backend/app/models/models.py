from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime, Enum
from sqlalchemy.orm import relationship
from datetime import datetime
import enum

from ..database.database import Base

class RiskLevel(enum.Enum):
    conservative = "conservative"
    moderate = "moderate"
    aggressive = "aggressive"
    
class Status(enum.Enum):
    active = "active"
    closed = "closed"

class Strategy(Base):
    __tablename__ = "strategies"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    description = Column(String)
    target_return = Column(Float, nullable=False)
    max_duration = Column(Integer, nullable=False)  # in days
    risk_level = Column(Enum(RiskLevel), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationship
    investments = relationship("Investment", back_populates="strategy")

class Investment(Base):
    __tablename__ = "investments"
    
    id = Column(Integer, primary_key=True, index=True)
    strategy_id = Column(Integer, ForeignKey("strategies.id"), nullable=False)
    symbol = Column(String, nullable=False)
    quantity = Column(Float, nullable=False)
    buy_price = Column(Float, nullable=False)
    current_price = Column(Float, nullable=True)
    status = Column(Enum(Status), default=Status.active)
    sold_quantity = Column(Float, default=0)
    profit = Column(Float)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationship
    strategy = relationship("Strategy", back_populates="investments") 