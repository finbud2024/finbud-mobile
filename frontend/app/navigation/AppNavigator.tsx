import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, StyleSheet } from "react-native";
import HomeScreen from "../screens/HomeScreen";

const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#FF595A",
    background: "#000000",
    card: "#121212",
    text: "#F9FAFB",
    border: "#2C2C2C",
    notification: "#FF595A",
  },
};

// Define placeholder screens
const PortfolioScreen = () => {
  return (
    <View style={[styles.placeholderScreen, { backgroundColor: "#000000" }]}>
      <Text style={{ color: "#F9FAFB" }}>Portfolio Screen</Text>
    </View>
  );
};

const CommunityScreen = () => {
  return (
    <View style={[styles.placeholderScreen, { backgroundColor: "#000000" }]}>
      <Text style={{ color: "#F9FAFB" }}>Community Screen</Text>
    </View>
  );
};

const LearnScreen = () => {
  return (
    <View style={[styles.placeholderScreen, { backgroundColor: "#000000" }]}>
      <Text style={{ color: "#F9FAFB" }}>Learn Screen</Text>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={[styles.placeholderScreen, { backgroundColor: "#000000" }]}>
      <Text style={{ color: "#F9FAFB" }}>Profile Screen</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeMain" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer theme={CustomDarkTheme}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#FF595A",
          tabBarInactiveTintColor: "#9CA3AF",
          tabBarStyle: {
            paddingBottom: 30,
            height: 80,
            backgroundColor: "#121212",
            borderTopColor: "#2C2C2C",
          },
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color }: { color: string }) => (
              <View style={styles.iconContainer}>
                <Text style={[styles.iconText, { color }]}>🏠</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Portfolio"
          component={PortfolioScreen}
          options={{
            tabBarIcon: ({ color }: { color: string }) => (
              <View style={styles.iconContainer}>
                <Text style={[styles.iconText, { color }]}>📊</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Community"
          component={CommunityScreen}
          options={{
            tabBarIcon: ({ color }: { color: string }) => (
              <View style={styles.iconContainer}>
                <Text style={[styles.iconText, { color }]}>👥</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Learn"
          component={LearnScreen}
          options={{
            tabBarIcon: ({ color }: { color: string }) => (
              <View style={styles.iconContainer}>
                <Text style={[styles.iconText, { color }]}>📚</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color }: { color: string }) => (
              <View style={styles.iconContainer}>
                <Text style={[styles.iconText, { color }]}>👤</Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  placeholderScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    fontSize: 20,
  },
});

export default AppNavigator;
