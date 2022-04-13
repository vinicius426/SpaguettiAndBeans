import { useRoute } from "@react-navigation/native";
import React from "react";
import {View, Text} from 'react-native'
import { MessageInput, MessageList, Channel } from "stream-chat-expo";

const ChannelScreen = ({navigation}) => {
    const route = useRoute();

    const channel = route.params?.channel;

    if(!channel){
        return <Text>Channel not found!</Text>
    }
    return(
     <Channel channel={channel}>
         <MessageList/>
         <MessageInput/>
    </Channel>
    )
}

export default ChannelScreen