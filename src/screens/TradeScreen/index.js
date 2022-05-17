import React, { useState, useEffect } from "react";
import { Pressable, View, Text, Alert, TextInput, FlatList } from "react-native";
import { styles } from "../../style";
import Avatar from "../../components/Avatar";
import { Icon } from "@rneui/themed";
import { useChatContext } from "stream-chat-expo";

const TradeScreen = () => {

  const [users, setUsers] = useState([]);
  const { client } = useChatContext();
  const cards = 250;

  const fetchUsers = async () => {
    const response = await client.queryUsers({});
    setUsers(response.users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

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
  console.log(users.online)

  return (

    <View style={{
      flex: 1,
      justifyContent: 'space-between'
    }}>
      <View style={{ padding: 15 }}>
        <View style={{
          flexDirection: 'row', alignItems: 'center', padding: 10
        }}>
          <Icon type="meterial"
            size={30}
            name="credit-card"
            color="#0d96ba" />
          <Text style={{ fontSize: 20, color: "#0d96ba" }}>= {cards}</Text>
        </View>
        <View style={{
          justifyContent: 'center', width: '100%', alignItems: 'center', paddingVertical: 30
        }}>
          <Text style={{ fontSize: 20, color: "#0d96ba" }}>
            You have {cards} cards!!
          </Text>
        </View>
        <View style={{ flexDirection: 'row', paddingVertical: 30 }}>
          <Text style={{ fontSize: 20, color: "#0d96ba" }}>
            Send
          </Text>
          <TextInput style={{ backgroundColor: 'white', paddingHorizontal: 10 }} />
          <Text style={{ fontSize: 20, color: "#0d96ba" }}> card(s) to:</Text>
        </View>
        <View style={{ height: 350, width: '100%' }}>
          <FlatList horizontal data={users}
            renderItem={({ item }) => <Avatar user={item} />} />
        </View>
      </View>

      <View style={{
        justifyContent: 'center', alignItems: 'center', padding: 10
      }}>
        <Pressable style={styles.button} onPress={AlertSend}>
          <Text style={styles.text}>Send</Text>
        </Pressable>
      </View>

    </View>
  );
};
export default TradeScreen;
