import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useChatContext } from "stream-chat-expo";
import AuthContext from "../../contexts/Authentication";


const UserListItem = ({user}) => {
    const {client} = useChatContext();
    const {userId} = useContext(AuthContext)
    const navigation = useNavigation();

    const onPress = async () => {
        const channel = client.channel('messaging', {members: [user.id, userId]})
        await channel.watch();

        navigation.navigate('ChannelScreen', {channel})
    }
    return(
        <TouchableOpacity onPress={onPress} style={styles.root}>
            <Image style={styles.image} source={{uri: user.image}}/>
            <Text>{user.name}</Text>
        </TouchableOpacity>
    )
}

export default UserListItem


const styles = StyleSheet.create({
    image:{
        width: 50,
        height: 50,
        backgroundColor: 'gray',
        borderRadius: 50,
        marginRight: 10
    },
    root:{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    }
})