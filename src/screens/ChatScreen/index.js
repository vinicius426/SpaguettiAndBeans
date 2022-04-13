import React from "react";
import { ChannelList } from "stream-chat-expo";

const ChatScreen = () => {
  const onChannelPressed = (channel) => {
    setSelectedChannel(channel)
  }
  return (
    <ChannelList onSelect={onChannelPressed}/>
  );
};

export default ChatScreen;
