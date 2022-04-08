import { Alert } from "react-native";

const AlertSend = () => {
  return Alert.alert("Sending cards", "Are you sure you want to send cards?", [
    {
      text: "Accept",
      onPress: () => Alert.alert("Success", "You've successfully sent cards."),
      style: "accept",
    },
    {
      text: "Cancel",
      onPress: () => Alert.alert("Send Failed", "Cancelled sending cards."),
      style: "cancel",
    },
  ]);
};

export default AlertSend;
