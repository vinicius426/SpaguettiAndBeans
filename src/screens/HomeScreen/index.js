import React, { useEffect } from "react";
import { Text, View } from "react-native";

import { styles } from "./style";
import { Icon } from "@rneui/themed";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useChatContext } from "stream-chat-expo";

const Size = 45
const UpSize = 45
export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            color: "#f2790f",
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          Profile
        </Text>
        <Icon
          type="ionicon"
          name="person-circle-outline"
          size={Size}
          color="#0d96ba"
          onPress={() => navigation.navigate("DetailsScreen")}
        />
      </View>

      <View>
        <Text
          style={{
            color: "#f2790f",
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          Log Out
        </Text>
        <Icon
          type="materialicons"
          name="exit-to-app"
          size={UpSize}
          color="#0d96ba"
        />
      </View>

      <View>
        <Text
          style={{
            color: "#f2790f",
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          Contact Us
        </Text>
        <Icon
          type="ionicon"
          name="chatbubble-ellipses"
          size={Size}
          color="#0d96ba"
          onPress={() => navigation.navigate("ContactScreen")}
        />
      </View>
    </View>
  );
}
