import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style";
import { Icon } from "@rneui/themed";

const Size = 45
export default function HomeScreen({ navigation }) {
  const ButtonComponent = ({ iconType, iconName, onPress, textField }) => {
    return (
      <View>
        <Text style={styles.buttonComponent}>
          {textField}
        </Text>
        <Icon
          type={iconType}
          name={iconName}
          size={Size}
          color="#0d96ba"
          onPress={onPress} />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <ButtonComponent iconType="ionicon"
        iconName="person-circle-outline"
        onPress={() => navigation.navigate("DetailsScreen")}
        textField="Profile" />
      <ButtonComponent iconType="materialicons"
        iconName="exit-to-app"
        onPress={() => { }}
        textField="LogOut" />
      <ButtonComponent iconType="ionicon"
        iconName="chatbubble-ellipses"
        onPress={() => { }}
        textField="Contact Us" />
    </View>
  );
}
