import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from ".";
import DetailsScreen from "../DetailsScreen";
import ContactScreen from "../ContactScreen";

const Stack = createNativeStackNavigator();

export default function HomeNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Welcome",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#f2790f",
          },
        }} />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          title: "Profile",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#f2790f",
          },
        }} />
      <Stack.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{
          title: "Contact Us",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#f2790f",
          },
        }} />
    </Stack.Navigator>
  );
}
