import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { ChannelList } from "stream-chat-expo";
import AuthContext from "../../contexts/Authentication";

const ChatScreen = ({navigation}) => {

  const onChannelPressed = (channel) => {
    navigation.navigate('ChannelScreen', {channel})
  }

  const {userId} = useContext(AuthContext);

  const filters = {
    members: {
      $in: [userId],
    },
  };

  return (
    <ChannelList onSelect={onChannelPressed} filters={filters}/>
  );
};

export default ChatScreen;
