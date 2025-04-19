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
      <ScrollView contentContainerStyle={styles.scrollView}>
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
              { title: "Savings Increase", detail: "20% average per user" },
              { title: "Financial Awareness", detail: "25% increase" },
              { title: "Debt Reduction", detail: "30% after 1 year" },
              { title: "Improved Credit Score", detail: "6 months within" },
            ].map((card, idx) => (
              <View key={idx} style={styles.technologyCard}>
                <Text style={styles.cardTitle}>{card.title}</Text>
                <Text style={styles.cardContent}>{card.detail}</Text>
              </View>
            ))}
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

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerImageWrapper}>
            <Image
              source={require('../assets/home-page/FinBudPix.png')}
              style={styles.footerImage}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.footerText}>
            © Copyright 2025, All Rights Reserved by FinBud
          </Text>
        </View>
      </ScrollView>

      {/* Tutorial Overlay */}
      { //<TutorialOverlay
        // steps={"a"}/* TODO: provide tutorialSteps array */
        //storageKey="finbudHomeTutorialShown"
        //autoStart={true}
        //onTutorialCompleted={chatNow}
        ///>
      }
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollView: { flexGrow: 1 },
  introContainer: { padding: 20, alignItems: "center" },
  title: { fontSize: 28, fontWeight: "bold", color: "#111", textAlign: "center" },
  description: { fontSize: 18, color: "#555", marginVertical: 10, textAlign: "center" },
  searchBar: { width: "100%", marginVertical: 10 },
  section: { padding: 20 },
  sectionHeader: { fontSize: 22, fontWeight: "600", color: "#111", marginBottom: 12 },
  gridContainer: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  gridBox: {
    width: "30%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  icon: { width: 40, height: 40, marginBottom: 10 },
  gridTitle: { fontSize: 16, fontWeight: "bold", color: "#111", marginBottom: 8, textAlign: "center" },
  gridText: { fontSize: 14, color: "#555", textAlign: "center" },
  technologyGrid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  technologyCard: {
    width: "45%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  cardTitle: { fontSize: 16, fontWeight: "bold", color: "#111", marginBottom: 5 },
  cardContent: { fontSize: 14, color: "#555" },
  faqItem: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  faqExpanded: { backgroundColor: "#f0f0f0" },
  faqQuestion: { fontSize: 16, fontWeight: "600", color: "#111" },
  faqAnswer: { fontSize: 14, color: "#555", marginTop: 8 },
  footer: {
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#2C2C2C',
  },

  // wrapper that gives you “snug + margin”
  footerImageWrapper: {
    width: '90%',      // 90% of the footer’s inner width
    marginVertical: 10, // a little space top & bottom
  },

  footerImage: {
    width: '100%',     // fill the wrapper
    height: undefined, // required when using aspectRatio
    // aspectRatio: 2,  // ← replace with your logo’s (width/height)
  },

  footerText: { fontSize: 12, color: "#333" },
});

export default FinbudHomeScreen;
