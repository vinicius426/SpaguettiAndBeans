import React, { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { useChatContext } from "stream-chat-expo";
import UserListItem from "../../components/UserListItem";


const ContactScreen = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const { client } = useChatContext();

  const fetchUsers = async() => {
    setIsLoading(true)
    const response = await client.queryUsers({});
    setUsers(response.users);
    setIsLoading(false)
  };

  useEffect(() => {
    fetchUsers();
  },[]);

  return (
    <View style={styles.container}>
      <FlatList data={users}
                renderItem={({item}) => <UserListItem user={item}/>}
                refreshing={isLoading}
                onRefresh={fetchUsers}
                />
    </View>
  );
};

export default ContactScreen;


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  }

})
