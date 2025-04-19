import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type StrategyCardProps = {
  title: string;
  description: string;
  returnTarget: string;
  maxDuration: string;
  type: "conservative" | "moderate" | "aggressive";
  selected: boolean;
  onSelect: () => void;
};

const StrategyCard = ({
  title,
  description,
  returnTarget,
  maxDuration,
  type,
  selected,
  onSelect,
}: StrategyCardProps) => {
  const getCardStyle = () => {
    if (selected) {
      switch (type) {
        case "conservative":
          return [styles.cardSelected, styles.cardConservativeSelected];
        case "moderate":
          return [styles.cardSelected, styles.cardModerateSelected];
        case "aggressive":
          return [styles.cardSelected, styles.cardAggressiveSelected];
        default:
          return styles.cardSelected;
      }
    }
    return styles.card;
  };

  const getTextStyle = () => {
    switch (type) {
      case "conservative":
        return styles.textConservative;
      case "moderate":
        return styles.textModerate;
      case "aggressive":
        return styles.textAggressive;
      default:
        return styles.textDark;
    }
  };

  return (
    <TouchableOpacity onPress={onSelect} style={getCardStyle()}>
      <View style={styles.cardContent}>
        <View style={styles.header}>
          <Text style={[styles.title, getTextStyle()]}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.returnTarget}>{returnTarget}</Text>
          <Text style={styles.maxDurationLabel}>Max Duration</Text>
          <Text style={styles.maxDuration}>{maxDuration}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2C2C2C",
    backgroundColor: "#121212",
    width: 140,
    height: 140,
    marginRight: 8,
  },
  cardSelected: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    width: 140,
    height: 140,
    marginRight: 8,
  },
  cardConservativeSelected: {
    backgroundColor: "rgba(93, 157, 236, 0.1)",
    borderColor: "#5D9DEC",
  },
  cardModerateSelected: {
    backgroundColor: "rgba(140, 107, 247, 0.1)",
    borderColor: "#8C6BF7",
  },
  cardAggressiveSelected: {
    backgroundColor: "rgba(255, 89, 90, 0.1)",
    borderColor: "#FF595A",
  },
  cardContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    marginBottom: 8,
  },
  title: {
    fontWeight: "bold",
  },
  textConservative: {
    color: "#5D9DEC",
  },
  textModerate: {
    color: "#8C6BF7",
  },
  textAggressive: {
    color: "#FF595A",
  },
  textDark: {
    color: "#F9FAFB",
  },
  description: {
    fontSize: 12,
    color: "#D1D5DB",
    marginTop: 4,
  },
  footer: {},
  returnTarget: {
    color: "#F9FAFB",
    fontWeight: "bold",
  },
  maxDurationLabel: {
    fontSize: 12,
    color: "#D1D5DB",
  },
  maxDuration: {
    fontSize: 12,
    color: "#9CA3AF",
  },
});

export default StrategyCard;
