import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import TraceScreen from "./src/screens/TraceScreen";
import ChatScreen from "./src/screens/ChatScreen";
import HomeNav from "./src/screens/HomeScreen/HomeNav";
import TradeScreen from "./src/screens/TradeScreen";

const Tab = createBottomTabNavigator();
const Size = 35;

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeNav"
          component={HomeNav}
          options={{
            title: "Welcome",
            headerShown: false,
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#f2790f",
            },
            tabBarIcon: ({ color }) => (
              <Icon
                type="ionicons"
                name="home"
                size={Size}
                color={color}
              ></Icon>
            ),
          }}
        />

        <Tab.Screen
          name="Trace"
          component={TraceScreen}
          options={{
            title: "Contact Tracing",
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#f2790f",
            },
            tabBarIcon: ({ color }) => (
              <Icon
                type="ionicon"
                name="people-circle-outline"
                size={Size}
                color={color}
              ></Icon>
            ),
          }}
        />
        <Tab.Screen
          name="Trade"
          component={TradeScreen}
          options={{
            title: "Trade Cards",
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#f2790f",
            },
            tabBarIcon: ({ color }) => (
              <Icon
                type="materialicons"
                name="compare-arrows"
                size={Size}
                color={color}
              ></Icon>
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            title: "Chat",
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#f2790f",
            },
            tabBarIcon: ({ color }) => (
              <Icon
                type="ionicon"
                name="chatbubbles-sharp"
                size={Size}
                color={color}
              ></Icon>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
