import React, { useState } from "react";
import { Pressable, View, Text, ScrollView, TextInput, FlatList } from "react-native";
import { styles } from "../../style";
import AlertSend from "./Alert";
import { Icon } from "@rneui/themed";
import { Avatar } from '@rneui/themed';
import { useChatContext } from "stream-chat-expo";

const TradeScreen = (props) => {

  const [users, setUsers] = useState([]);

  const { client } = useChatContext();

  const fetchUsers = async () => {
    setIsLoading(true)
    const response = await client.queryUsers({});
    setUsers(response.users);
    setIsLoading(false)
  };

  fetchUsers();

  console.log(users)

  const getInitials = (fullName) => {
    const allNames = fullName.trim().split(' ');
    const initials = allNames.reduce((acc, curr, index) => {
      if (index === 0 || index === allNames.length - 1) {
        acc = `${acc}${curr.charAt(0).toUpperCase()}`;
      }
      return acc;
    }, '');
    return initials;
  }

  const RenderAvatar = (name) => {
    const initials = getInitials(name)
    return (
      // <Avatar
      //   size={250}
      //   rounded
      //   title={initials}
      //   containerStyle={{ backgroundColor: '#3d4db7' }} />

      <View>
        <Text>
          {initials}
        </Text>
      </View>
    )
  }

  return (

    <View style={{
      flex: 1,
      justifyContent: 'space-between'
    }}>
      <View>
        <View style={{
          flexDirection: 'row', alignItems: 'center', padding: 10
        }}>
          <Icon type="meterial"
            size='30'
            name="credit-card"
            color="#0d96ba" />
          <Text style={{ fontSize: 20, color: "#0d96ba" }}>= 10</Text>
        </View>
        <View style={{
          justifyContent: 'center', width: '100%', alignItems: 'center', paddingVertical: 30
        }}>
          <Text style={{ fontSize: 20, color: "#0d96ba" }}>
            You have 10 cards!!
          </Text>
        </View>
        <View style={{ flexDirection: 'row', paddingVertical: 30 }}>
          <Text style={{ fontSize: 20, color: "#0d96ba" }}>
            Send
          </Text>
          <TextInput style={{ backgroundColor: 'white', paddingHorizontal: 10 }} />
          <Text style={{ fontSize: 20, color: "#0d96ba" }}> card(s) to:</Text>
        </View>
      </View>
      <View style={{
        alignItems: 'center', justifyContent: 'center', paddingVertical: 50
      }}>
        <FlatList horizontal data={users} renderItem={RenderAvatar} />
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
