import React from "react";
import { Pressable, View, Text, Alert, ScrollView } from "react-native";
import { styles } from "../../style";
import AlertSend from "./Alert";
import { Icon } from "@rneui/themed";
import { TextInput } from "react-native-gesture-handler";

const TradeScreen = (props) => {
  const { title = "Send" } = props;
  return (

    <View style={{
      flex:1,
      justifyContent: 'space-between'
    }}>
      <View>
      <View style={{
        flexDirection: 'row', alignItems: 'center', padding: 10
      }}>
        <Icon type="meterial"
          size = '30'
          name="credit-card"
          color="#0d96ba"/>
        <Text style={{fontSize: 20, color: "#0d96ba"}}>= 10</Text>
      </View>
      <View style={{
        justifyContent: 'center', width: '100%', alignItems: 'center', paddingVertical: 30
      }}>
        <Text style={{fontSize: 20, color: "#0d96ba"}}>
            You have 10 cards!!
        </Text>
      </View>
      <View style={{flexDirection: 'row', paddingVertical: 30}}>
        <Text style={{fontSize: 20, color: "#0d96ba"}}>
          Send
        </Text>
        <TextInput style={{backgroundColor: 'white', paddingHorizontal: 10}}/>
        <Text style={{fontSize: 20, color: "#0d96ba"}}> card(s) to:</Text>
      </View>
      </View>
      <View style={{
        alignItems: 'center', justifyContent: 'center', paddingVertical: 50
      }}>
      <ScrollView horizontal={true}>
        <View style={{backgroundColor: 'yellow', width:250, height: 250, borderRadius: 150, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{
            fontSize:150, color: 'white', fontWeight: 'bold'
          }}>VS</Text>
        </View>
        <View style={{backgroundColor: 'yellow', width:250, height: 250, borderRadius: 150, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{
            fontSize:150, color: 'white', fontWeight: 'bold'
          }}>VS</Text>
        </View>
        <View style={{backgroundColor: 'yellow', width:250, height: 250, borderRadius: 150, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{
            fontSize:150, color: 'white', fontWeight: 'bold'
          }}>VS</Text>
        </View>

      </ScrollView>
      </View>
      <View style={{
        justifyContent:'center', alignItems: 'center', padding: 10
      }}>
        <Pressable style={styles.button} onPress={AlertSend}>
          <Text style={styles.text}>{title}</Text>
        </Pressable>
      </View>

    </View>
  );
};
export default TradeScreen;
