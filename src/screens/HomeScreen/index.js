import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { StreamChat } from "stream-chat";
import { styles } from "./style";

const API_KEY = "yrnv8qb72qq3";
const client = StreamChat.getInstance(API_KEY);

export default function HomeScreen({ navigation }) {
  useEffect(() => {
    const connectUser = async () => {
      await client.connectUser(
        {
          id: "Vinnie",
          name: "Vinnie Silva",
          image: "https://i.imgur.com/fR9Jz14.png",
        },
        client.devToken("Vinnie")
      );
      const channel = client.channel("messaging", "spaghettiAndBeans", {
        name: "spaghettiAndBeans",
      });
      await channel.watch();

      console.log("User Connected");
    };

    connectUser();

    return () => client.disconnectUser();
  }, []);

  return (
    <View style={styles.container}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <StatusBar style="auto" />
    </View>
  );
}
