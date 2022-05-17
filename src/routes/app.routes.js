import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import ChatScreen from "../screens/ChatScreen";
import TradeScreen from '../screens/TradeScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupScreen from "../screens/SignupScreen";
import AuthContext from "../contexts/Authentication";
import ContactScreen from "../screens/ContactScreen";
import ChannelScreen from "../screens/ChannelScreen";
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from "../components/CustomDrawer";
import { TicTacToeGame } from "../screens/TicTacToeScreen";

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
          <Drawer.Screen name="Contacts" component={TabNavigator} />

        </Drawer.Navigator>
      }
    </>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Trace"
        component={ContactScreen}
        options={{
          title: "Contacts",
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
        name="Game"
        component={TicTacToeGame}
        options={{
          title: "Game",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#f2790f",
          },
          tabBarIcon: ({ color }) => (
            <Icon
              type="ionicon"
              name="md-game-controller-outline"
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
          <ChatStack.Navigator options={{ headerShown: false }}>
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
