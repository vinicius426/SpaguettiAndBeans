import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../style";

const TraceScreen = () => {
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
          flex: 8,
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
    </View>
  );
};

export default TraceScreen;
