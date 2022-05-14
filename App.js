import 'react-native-gesture-handler';
import React, { useEffect, useState } from "react";
import Routes from "./src/routes/app.routes";
import { StreamChat } from "stream-chat";
import { OverlayProvider, Chat } from "stream-chat-expo";
import { NavigationContainer } from "@react-navigation/native";
import AuthContext from "./src/contexts/Authentication";
import { GestureHandlerRootView } from "react-native-gesture-handler";


const API_KEY = "yrnv8qb72qq3";
const client = StreamChat.getInstance(API_KEY);

export default function App() {

  const [userId, setUserId] = useState('')

  useEffect(() => {
    return () => client.disconnectUser();
  }, []);

  return (
    <AuthContext.Provider value={{ userId, setUserId }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <OverlayProvider>
          <Chat client={client}>
            <NavigationContainer>
              <Routes />
            </NavigationContainer>
          </Chat>
        </OverlayProvider>
      </GestureHandlerRootView>
    </AuthContext.Provider>


  );
}
