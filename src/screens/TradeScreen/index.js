import React from "react";
import { Pressable, View, Text, Alert } from "react-native";
import { styles } from "../../style";
import AlertSend from "./Alert";

const TradeScreen = (props) => {
  const { title = "Send" } = props;
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "yellow",
          flex: 10,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "red",
          }}
        >
          <Text>Trade Screen!</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "blue",
          flex: 1,
        }}
      >
        <Pressable style={styles.button} onPress={AlertSend}>
          <Text style={styles.text}>{title}</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default TradeScreen;
