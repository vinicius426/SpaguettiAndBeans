import React, {useEffect, useState, useContext} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Routes from "./src/routes";
import { StreamChat } from "stream-chat";
import { OverlayProvider, Chat, ChannelList, Channel, MessageList, MessageInput } from "stream-chat-expo";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import SignupScreen from "./src/screens/SignupScreen";
import AuthContext from "./src/contexts/Authentication";


const API_KEY = "yrnv8qb72qq3";
const client = StreamChat.getInstance(API_KEY);
const Size = 45;
const UpSize = 50;

export default function App() {

  const [userId, setUserId] = useState('')
  const [selectedChannel, setSelectedChannel] = useState(null)

  useEffect(() => {
    return () => client.disconnectUser();
  }, []);

  return (
    <AuthContext.Provider value={{userId, setUserId}}>
      <OverlayProvider>
        <Chat client={client}>
          <NavigationContainer>
            <Routes/>
          </NavigationContainer>
        </Chat>

        {/*
          {selectedChannel ? (
          <Channel channel={selectedChannel}>
            <MessageList/>
            <MessageInput/>
            <Text style={{margin: 50}} onPress={()=>setSelectedChannel(null)}>Go back</Text>
          </Channel>
        ): }
      </Chat> */}

      </OverlayProvider>
    </AuthContext.Provider>

  );
}
