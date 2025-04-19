import React from "react";
import { View, Text, StyleSheet } from "react-native";

type InvestmentItemProps = {
  symbol: string;
  type: "conservative" | "moderate" | "aggressive";
  quantity: number;
  status: "closed" | "active";
  sold?: number;
};

const InvestmentItem = ({
  symbol,
  type,
  quantity,
  status,
  sold = 0,
}: InvestmentItemProps) => {
  const getTypeStyles = () => {
    switch (type) {
      case "conservative":
        return styles.conservative;
      case "moderate":
        return styles.moderate;
      case "aggressive":
        return styles.aggressive;
      default:
        return styles.default;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <View style={styles.symbolContainer}>
          <Text style={styles.symbol}>{symbol}</Text>
          <View style={styles.detailsRow}>
            <View style={[styles.badge, getTypeStyles()]}>
              <Text style={styles.badgeText}>{type}</Text>
            </View>
            <Text style={styles.quantityText}>Bought: {quantity}</Text>
          </View>
        </View>
      </View>
      <View style={styles.rightContent}>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{status.toUpperCase()}</Text>
        </View>
        <Text style={styles.soldText}>Sold: {sold}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  symbolContainer: {
    marginRight: 12,
  },
  symbol: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F9FAFB",
  },
  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  conservative: {
    backgroundColor: "#5D9DEC",
  },
  moderate: {
    backgroundColor: "#8C6BF7",
  },
  aggressive: {
    backgroundColor: "#FF595A",
  },
  default: {
    backgroundColor: "#D1D5DB",
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  quantityText: {
    color: "#D1D5DB",
    fontSize: 12,
    marginLeft: 8,
  },
  rightContent: {
    alignItems: "flex-end",
  },
  statusBadge: {
    backgroundColor: "#1E1E1E",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  statusText: {
    fontSize: 12,
    color: "#F9FAFB",
  },
  soldText: {
    fontSize: 12,
    color: "#D1D5DB",
    marginTop: 4,
  },
});

export default InvestmentItem;
