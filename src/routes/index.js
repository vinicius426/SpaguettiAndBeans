import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import ChatScreen from "../screens/ChatScreen";
import HomeNav from "../screens/HomeScreen/HomeNav";
import TradeScreen from '../screens/TradeScreen/';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupScreen from "../screens/SignupScreen";
import AuthContext from "../contexts/Authentication";
import ContactScreen from "../screens/ContactScreen";
import ChannelScreen from "../screens/ChannelScreen";
import { theme } from "../Styles/theme";
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from "../components/CustomDrawer";

const Tab = createBottomTabNavigator();
const Size = 35;
const Stack = createNativeStackNavigator();
const ChatStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function Routes() {

  const { userId } = useContext(AuthContext);

  return (
    <>
      {!userId ? (
        <Stack.Navigator>
          <Stack.Screen name='Login' component={SignupScreen} />
        </Stack.Navigator>
      ) :

        <Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={props => <CustomDrawer{...props} />}>
          <Drawer.Screen name="TabNavigator" component={TabNavigator} />

        </Drawer.Navigator>
      }
    </>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeNav"
        component={HomeNav}
        options={{
          title: "Welcome",
          headerShown: false,
          headerTitleAlign: "center",
          headerTintColor: theme.colors.text.primary,
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
        component={ContactScreen}
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
      >
        {props => (
          <ChatStack.Navigator>
            <ChatStack.Screen
              name="ChatScreen"
              component={ChatScreen}
            />
            <ChatStack.Screen
              name="ChannelScreen"
              component={ChannelScreen}
            />
          </ChatStack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>

  )
}
