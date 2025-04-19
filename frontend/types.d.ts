// Strategy types
type StrategyType = "conservative" | "moderate" | "aggressive";
type StatusType = "active" | "closed";

interface Strategy {
  id: string;
  title: string;
  description: string;
  returnTarget: string;
  maxDuration: string;
  type: StrategyType;
}

interface Investment {
  symbol: string;
  type: StrategyType;
  quantity: number;
  status: StatusType;
  sold?: number;
}
