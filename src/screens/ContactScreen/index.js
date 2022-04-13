import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useChatContext } from "stream-chat-expo";


const ContactScreen = () => {
  const [users, setUsers] = useState([]);

  const {client} = useChatContext

  console.log(client)

  // useEffect(() => {
  //   const fetchUsers = async() => {
  //     const response = await client.queryUsers({});
  //     console.log('RESPONSE', response)
  //   };

  //   fetchUsers();
  // },[]);
  return (
    <View>
      <Text>
        TESTE
      </Text>
    </View>

  );
};

export default ContactScreen;
