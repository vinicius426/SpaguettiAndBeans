import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity, TextInput, View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import { useChatContext } from 'stream-chat-expo'
import AuthContext from "../../contexts/Authentication";
import React, { useContext } from "react";
import { styles } from './styles'

const SignupScreen = () => {
    const [username, setUsername] = useState('')
    const [fullName, setFullName] = useState('')
    const { setUserId } = useContext(AuthContext)
    const { client } = useChatContext();

    const connectUser = async (username, fullName) => {
        await client.connectUser(
            {
                id: username,
                name: fullName,
                // image: "https://i.imgur.com/fR9Jz14.png",
            },
            client.devToken(username)
        );
        const channel = client.channel("livestream", "live", {
            name: "Spaghetti And Beans",
        });
        await channel.create();
        setUserId(username);
    };

    const signUp = async () => {
        await connectUser(username, fullName)

    };
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.inputContainer}>
                <TextInput value={username}
                    onChangeText={setUsername}
                    placeholder="Username"
                    style={styles.input} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput value={fullName}
                    onChangeText={setFullName}
                    style={styles.input}
                    placeholder="Full name" />
            </View>
            <TouchableOpacity onPress={signUp}
                style={styles.button}>
                <Text>
                    Sign up
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default SignupScreen
