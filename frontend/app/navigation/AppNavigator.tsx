import React from "react";"react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, View, Text, StyleSheet } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import AboutUsScreen from "../screens/AboutUsScreen";

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

const AboutUsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AboutUsMain" component={AboutUsScreen} />
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
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("../assets/icons/home.png")}
                style={[styles.iconImage, { tintColor: color, width: size, height: size }]}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Portfolio"
          component={PortfolioScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("../assets/icons/briefcase.png")}
                style={[styles.iconImage, { tintColor: color, width: size, height: size }]}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Community"
          component={CommunityScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("../assets/icons/people.png")}
                style={[styles.iconImage, { tintColor: color, width: size, height: size }]}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tab.Screen
          name="About Us"
          component={AboutUsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("../assets/icons/mortarboard.png")}
                style={[styles.iconImage, { tintColor: color, width: size, height: size }]}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("../assets/icons/user.png")}
                style={[styles.iconImage, { tintColor: color, width: size, height: size }]}
                resizeMode="contain"
              />
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
  iconImage: {
    width: 24,
    height: 24,
  },
});

export default AppNavigator;
