import React from "react";
import { Button, View, Text } from "react-native";
import { styles } from "../../style";

const DetailsScreen = () => {
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

export default DetailsScreen;
