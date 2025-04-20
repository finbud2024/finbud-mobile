import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Input from "../components/Input";

// import UserInput from "../components/UserInput";
// import TutorialOverlay from "../components/tutorial/TutorialOverlay";

// TODO: Import or define your FAQs data and tutorial steps
import faqs from "../data/faqs";

const FinbudHomeScreen: React.FC = () => {
  const navigation = useNavigation();

  // Placeholder for typing effect or static
  const [signInTitle, setSignInTitle] = useState<string>(
    "Anytime answers for finance questions with FinBud"
  );

  const [searchText, setSearchText] = useState<string>("");

  // FAQs state
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleExpansion = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const chatNow = () => {
    // TODO: Replace with proper auth check
    // navigation.navigate("ChatView");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        {/* Intro Section */}
        <View style={styles.introContainer}>
          <Text style={styles.title}>Empowering smarter finance decisions</Text>
          <Text style={styles.description}>{signInTitle}</Text>
          <Input
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search FinBud..."
          // optionally pass icons:
          // leftIcon={<YourSearchIcon />}
          // rightIcon={<YourClearOrSendIcon />}
          />
          {/* <UserInput onSendMessage={chatNow} style={styles.searchBar} /> */}
        </View>

        {/* Partnering Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Partnering to Achieve Financial Goals</Text>
          <View style={styles.gridContainer}>
            {/* Box 1 */}
            <View style={styles.gridBox}>
              <Image
                source={require("../assets/home-page/Lightbulb.png")}
                style={styles.icon}
              />
              <Text style={styles.gridTitle}>Enhance Your Financial Awareness</Text>
              <Text style={styles.gridText}>
                Finbud's advanced AI chatbot will help you review, explore financial topics, and answer all your
                questions.
              </Text>
            </View>
            {/* Box 2 */}
            <View style={styles.gridBox}>
              <Image
                source={require("../assets/home-page/Bars.png")}
                style={styles.icon}
              />
              <Text style={styles.gridTitle}>Optimize Your Financial Planning</Text>
              <Text style={styles.gridText}>
                Finbud helps you track and manage expenses, record income and spending, and tailor financial management to
                your specific goals.
              </Text>
            </View>
            {/* Box 3 */}
            <View style={styles.gridBox}>
              <Image
                source={require("../assets/home-page/CircleArrowUp.png")}
                style={styles.icon}
              />
              <Text style={styles.gridTitle}>Maximize Your Investment Efficiency</Text>
              <Text style={styles.gridText}>
                Finbud provides a comprehensive overview of the financial market, guiding you to optimize your capital confidently.
              </Text>
            </View>
          </View>
        </View>

        {/* Technology Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Easily notice the impact</Text>
          <View style={styles.technologyGrid}>
            {[
              {
                title: "Savings Increase",
                number: "20% ", detail: "average per user"
              },
              {
                title: "Financial Awareness",
                number: "25% ", detail: "increase"
              },
              {
                title: "Debt Reduction",
                number: "30% ", detail: "reduced after 1 year"
              },
              {
                title: "Improved Credit Score",
                number: "6 ", detail: "months to see improvement"
              },
            ].map((card, idx) => (
              <View key={idx} style={styles.technologyCard}>
                <Text style={styles.techTitle}>{card.title}</Text>
                <View style={styles.techStats}>
                  <Text style={styles.techNumber}>{card.number}</Text>
                  <Text style={styles.techDetail}>{card.detail}</Text>
                </View >
              </View>
            ))}
          </View>
        </View>


        {/* === Features Section === */}
        <View style={styles.featureSection}>
          <View style={styles.featureContainer}>
            {/* Feature 1 */}
            <View style={styles.featureRow}>
              <View style={styles.featureImageContainer}>
                <Image
                  source={require("../assets/home-page/FinBudPix.png")}
                  style={styles.featureImage}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.featureText}>
                <Text style={styles.featureHeading}>
                  Solve Financial Worries with{" "}
                  <Text style={styles.featureName}>AI Chatbot,</Text>
                </Text>
                <Text style={styles.featureDescription}>
                  With just simple commands and access to a vast source of accurate and reliable information, all your financial queries can be answered instantly.
                </Text>
                <TouchableOpacity
                  style={styles.featureButton}
                // onPress={() => navigation.navigate("ChatView")}
                >
                  <Text style={styles.featureButtonText}>Chat Now</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Feature 2 */}
            <View style={styles.featureRow}>
              <View style={styles.featureImageContainer}>
                <Image
                  source={require("../assets/home-page/FinBudPix.png")}
                  style={styles.featureImage}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.featureText}>
                <Text style={styles.featureHeading}>
                  Master Your Investments with{" "}
                  <Text style={styles.featureName}>FinBud Simulator,</Text>
                </Text>
                <Text style={styles.featureDescription}>
                  Track how your investments are performing in real‑time, provide actionable insights from your investment and the market to make better investment decisions.
                </Text>
                <TouchableOpacity
                  style={styles.featureButton}
                // onPress={() => navigation.navigate("StockSimulator")}
                >
                  <Text style={styles.featureButtonText}>Simulator Now</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Feature 3 */}
            <View style={styles.featureRow}>
              <View style={styles.featureImageContainer}>
                <Image
                  source={require("../assets/home-page/FinBudPix.png")}
                  style={styles.featureImage}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.featureText}>
                <Text style={styles.featureHeading}>
                  Predict Your Costs with{" "}
                  <Text style={styles.featureName}>FinBud Goal,</Text>
                </Text>
                <Text style={styles.featureDescription}>
                  Our AI predicts upcoming expenses to help you plan ahead, understand your spending patterns and receive tips for better budget management.
                </Text>
                <TouchableOpacity
                  style={styles.featureButton}
                // onPress={() => navigation.navigate("Goal")}
                >
                  <Text style={styles.featureButtonText}>Set Goal Now</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Feature 4 */}
            <View style={styles.featureRow}>
              <View style={styles.featureImageContainer}>
                <Image
                  source={require("../assets/home-page/FinBudPix.png")}
                  style={styles.featureImage}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.featureText}>
                <Text style={styles.featureHeading}>
                  Boost Your Finance Skills with{" "}
                  <Text style={styles.featureName}>FinBud Quiz,</Text>
                </Text>
                <Text style={styles.featureDescription}>
                  Financial quizzes on different topics help you practice and learn financial knowledge in a smart, interactive way.
                </Text>
                <TouchableOpacity
                  style={styles.featureButton}
                // onPress={() => navigation.navigate("Quiz")}
                >
                  <Text style={styles.featureButtonText}>Try Quiz Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>



        {/* FAQ Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Frequently Asked Questions</Text>
          {faqs.map((item, index) => (
            <View
              key={index}
              style={[styles.faqItem, expandedItem === index && styles.faqExpanded]}
            >
              <TouchableOpacity onPress={() => toggleExpansion(index)}>
                <Text style={styles.faqQuestion}>{item.question}</Text>
              </TouchableOpacity>
              {expandedItem === index && (
                <Text style={styles.faqAnswer}>{item.answer}</Text>
              )}
            </View>
          ))}
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  scrollView: { flex: 1 },
  introContainer: {
    padding: 20,      // default all sides
    paddingTop: 250,   // override just the top
    paddingBottom: 350,
    alignItems: "center",
  },
  contentContainer: { paddingVertical: 20 },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111",
    textAlign: "center"
  },
  description: {
    fontSize: 18,
    color: "#555",
    marginVertical: 10,
    textAlign: "center"
  },
  searchBar: {
    width: "100%",
    marginVertical: 10
  },
  section: { padding: 20 },
  sectionHeader: {
    fontSize: 22,
    fontWeight: "600",
    color: "#111",
    marginBottom: 12
  },
  gridContainer: {
    flexDirection: "column",   // stack children top→down
    alignItems: "stretch",     // make them fill width (or you can center)
    gap: 16,                   // RN 0.71+ supports gap, otherwise use marginBottom on boxes
  },
  gridBox: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  icon: {
    width: 40,
    height: 40, marginBottom: 10
  },
  gridTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 8,
    textAlign: "center"
  },
  gridText: {
    fontSize: 14,
    color: "#555",
    textAlign: "center"
  },
  technologyGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  technologyCard: {
    width: "45%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",  // vertical centering
    alignItems: "center",      // horizontal centering
  },
  techTitle: {
    fontSize: 16,          // just a little bigger than normal body text
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  techStats: {
    flexDirection: "column",
    alignItems: "center",
  },
  techNumber: {
    fontSize: 32,          // big, bold number
    fontWeight: "700",
    color: "#000",
    lineHeight: 36,        // keep number from cutting off
    marginBottom: 4
  },
  techDetail: {
    fontSize: 14,          // normal/small detail text
    color: "#555",
    marginLeft: 0,
    marginBottom: 0,
  },
  featureSection: {
    paddingVertical: 20,
  },
  featureContainer: {
    paddingHorizontal: 16,
  },
  featureRow: {
    flexDirection: "column",
    alignItems: "stretch",
    borderWidth: 1,
    borderColor: "#ccc",
    overflow: "hidden",
    marginBottom: 16,
    flex: 1,
  },
  featureImageContainer: {
    flex: 1,
    width: 150,
    // borderLeftWidth: 0,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    padding: 16,
  },
  featureImage: {
    width: "70%",
    height: undefined,
    aspectRatio: 1,
  },
  featureText: {
    flex: 1,
    padding: 24,
  },
  featureHeading: {
    fontSize: 20,
    fontWeight: "normal",
    marginBottom: 12,
    color: "#333",
  },
  featureName: {
    color: "blue",
    fontWeight: "600",
  },
  featureDescription: {
    fontSize: 14,
    color: "#555",
    marginBottom: 12,
  },
  featureButton: {
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#3B82F6",
    borderRadius: 6,
  },
  featureButtonText: {
    color: "#3B82F6",
    fontWeight: "600",
  },
  faqItem: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  faqExpanded: { backgroundColor: "#f0f0f0" },
  faqQuestion: {
    fontSize: 16,
    fontWeight: "600", color: "#111"
  },
  faqAnswer: {
    fontSize: 14,
    color: "#555", marginTop: 8
  }
});

export default FinbudHomeScreen;
