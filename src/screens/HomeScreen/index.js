import React, { useEffect } from "react";
import { Text, View, Button } from "react-native";
import { StreamChat } from "stream-chat";
import { styles } from "./style";
import { Icon } from "@rneui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const API_KEY = "yrnv8qb72qq3";
const client = StreamChat.getInstance(API_KEY);
const stack = createNativeStackNavigator;

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
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              color: "#f2790f",
              size: 15,
              fontWeight: "bold",
            }}
          >
            Profile
          </Text>
          <Icon
            type="ionicon"
            name="person-circle-outline"
            size={45}
            color="blue"
            onPress={() => navigation.navigate("DetailsScreen")}
          />
        </View>
        <View>
          <Text
            style={{
              color: "#f2790f",
              size: 15,
              fontWeight: "bold",
            }}
          >
            Profile
          </Text>
          <Icon
            type="materialicons"
            name="exit-to-app"
            size={45}
            color="blue"
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            color: "#f2790f",
            size: 15,
            fontWeight: "bold",
          }}
        >
          Profile
        </Text>
        <Icon
          type="ionicon"
          name="chatbubble-ellipses"
          size={45}
          color="blue"
        />
      </View>
    </View>
  );
}
