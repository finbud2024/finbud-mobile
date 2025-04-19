import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StrategyCard from "../components/StrategyCard";
import Button from "../components/Button";
import InvestmentItem from "../components/InvestmentItem";

const HomeScreen = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<string | null>(null);
  const [capitalAmount, setCapitalAmount] = useState("");

  const strategies = [
    {
      id: "conservative",
      title: "Conservative",
      description: "Low risk, steady growth",
      returnTarget: "15%",
      maxDuration: "30 days",
      type: "conservative" as const,
    },
    {
      id: "moderate",
      title: "Moderate",
      description: "Balanced risk and reward",
      returnTarget: "20%",
      maxDuration: "10 days",
      type: "moderate" as const,
    },
    {
      id: "aggressive",
      title: "Aggressive",
      description: "Higher risk, greater returns",
      returnTarget: "25%",
      maxDuration: "5 days",
      type: "aggressive" as const,
    },
  ];

  const investments = [
    {
      symbol: "NVDA",
      type: "aggressive" as const,
      quantity: 8.4367,
      status: "closed" as const,
      sold: 0,
    },
    {
      symbol: "MSFT",
      type: "conservative" as const,
      quantity: 2.5589,
      status: "closed" as const,
      sold: 0,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Finbud</Text>
          </View>

          {/* Start New Strategy Section */}
          <View style={styles.card}>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionNumberCircle}>
                <Text style={styles.sectionNumber}>1</Text>
              </View>
              <Text style={styles.sectionTitle}>Start New Strategy</Text>
            </View>

            <Text style={styles.label}>Select Strategy:</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.strategyCards}
            >
              {strategies.map((strategy) => (
                <StrategyCard
                  key={strategy.id}
                  title={strategy.title}
                  description={strategy.description}
                  returnTarget={strategy.returnTarget}
                  maxDuration={strategy.maxDuration}
                  type={strategy.type}
                  selected={selectedStrategy === strategy.id}
                  onSelect={() => setSelectedStrategy(strategy.id)}
                />
              ))}
            </ScrollView>

            <Text style={styles.label}>Capital Allocation ($):</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Enter amount"
              placeholderTextColor="#9CA3AF"
              value={capitalAmount}
              onChangeText={setCapitalAmount}
            />

            <Button
              title="START STRATEGY"
              onPress={() => {}}
              disabled={!selectedStrategy || !capitalAmount}
            />
          </View>

          {/* Auto Investments Section */}
          <View style={styles.card}>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionNumberCircle}>
                <Text style={styles.sectionNumber}>2</Text>
              </View>
              <Text style={styles.sectionTitle}>Auto Investments</Text>
            </View>

            {investments.map((investment, index) => (
              <InvestmentItem
                key={index}
                symbol={investment.symbol}
                type={investment.type}
                quantity={investment.quantity}
                status={investment.status}
                sold={investment.sold}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F9FAFB",
  },
  card: {
    backgroundColor: "#121212",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    borderColor: "#2C2C2C",
    borderWidth: 1,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionNumberCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#EBF5FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  sectionNumber: {
    color: "#3B82F6",
    fontWeight: "bold",
  },
  sectionTitle: {
    fontWeight: "600",
    color: "#F9FAFB",
  },
  label: {
    marginBottom: 8,
    color: "#D1D5DB",
  },
  strategyCards: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#2C2C2C",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: "#1E1E1E",
    color: "#F9FAFB",
  },
});

export default HomeScreen;
