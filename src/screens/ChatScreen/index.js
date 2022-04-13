import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ChannelList } from "stream-chat-expo";

const ChatScreen = ({navigation}) => {

  const onChannelPressed = (channel) => {
    navigation.navigate('ChannelScreen', {channel})
  }
  return (
    <ChannelList onSelect={onChannelPressed}/>
  );
};

export default ChatScreen;
