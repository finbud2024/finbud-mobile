import { Alert } from "react-native";

// Base API URL would come from environment config in a real app
const BASE_URL = "https://your-backend-url.com/api";

// Types
export interface Strategy {
  id: string;
  name: string;
  description: string;
  targetReturn: number;
  maxDuration: number;
  riskLevel: "conservative" | "moderate" | "aggressive";
}

export interface Investment {
  id: string;
  symbol: string;
  quantity: number;
  buyPrice: number;
  currentPrice: number;
  strategy: string;
  status: "active" | "closed";
  soldQuantity: number;
  profit?: number;
  createdAt: string;
  updatedAt: string;
}

// API Error handler
const handleApiError = (error: any) => {
  console.error("API Error:", error);
  const message =
    error?.response?.data?.message || "Something went wrong. Please try again.";
  Alert.alert("Error", message);
  return Promise.reject(error);
};

// API service
const api = {
  // Strategies
  getStrategies: async (): Promise<Strategy[]> => {
    try {
      const response = await fetch(`${BASE_URL}/strategies`);
      if (!response.ok) throw new Error("Failed to fetch strategies");
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },

  startStrategy: async (
    strategyId: string,
    amount: number
  ): Promise<Investment[]> => {
    try {
      const response = await fetch(
        `${BASE_URL}/strategies/${strategyId}/start`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount }),
        }
      );
      if (!response.ok) throw new Error("Failed to start strategy");
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },

  // Investments
  getInvestments: async (): Promise<Investment[]> => {
    try {
      const response = await fetch(`${BASE_URL}/investments`);
      if (!response.ok) throw new Error("Failed to fetch investments");
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },

  getInvestmentDetails: async (investmentId: string): Promise<Investment> => {
    try {
      const response = await fetch(`${BASE_URL}/investments/${investmentId}`);
      if (!response.ok) throw new Error("Failed to fetch investment details");
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },

  // Market data
  getStockQuote: async (symbol: string): Promise<any> => {
    try {
      const response = await fetch(`${BASE_URL}/market/quote/${symbol}`);
      if (!response.ok) throw new Error("Failed to fetch stock quote");
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },
};

export default api;
