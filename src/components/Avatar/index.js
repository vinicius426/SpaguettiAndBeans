import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useChatContext } from "stream-chat-expo";
import AuthContext from "../../contexts/Authentication";


const Avatar = ({ user, onPress }) => {
    const { client } = useChatContext();
    const { userId } = useContext(AuthContext)

    return (
        <TouchableOpacity onPress={onPress} style={styles.root}>
            <Image style={styles.image} source={{ uri: user.image }} />
            <Text style={styles.text}>{user.name}</Text>
        </TouchableOpacity>
    )
}

export default Avatar


const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
        backgroundColor: 'gray',
        borderRadius: 150,
        marginRight: 10
    },
    root: {
        alignItems: 'center',
        margin: 10
    },
    text: {
        fontSize: 30
    }
})