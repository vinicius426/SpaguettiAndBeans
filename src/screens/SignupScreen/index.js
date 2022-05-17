import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity, TextInput, View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import { useChatContext } from 'stream-chat-expo'
import AuthContext from "../../contexts/Authentication";
import React, { useContext } from "react";
import { styles } from './styles'
import { CustomButton } from "../../components/CustomButton";
import { Image } from "react-native";

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
            <Text style={{ fontSize: 90, color: '#34A6BF' }}>
                Spaghetti and Beans
            </Text>
            <Image source={require('../../../assets/logo_new.png')} style={{ position: 'relative', height: 200, width: 200, alignSelf: 'flex-end' }} />
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
            <CustomButton onPress={signUp} />
        </SafeAreaView>
    )
}

export default SignupScreen
