import React from "react";
import { ImageBackground, View, Image, Text } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { styles } from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CustomDrawer(props) {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: '#f2790f' }}>
                <ImageBackground source={require('../../../assets/image-7oz5ketu.png')} style={{ padding: 20 }}>
                    <Image source={require('../../../assets/cartoon-happy-face.jpeg')}
                        style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }} />
                    <Text style={styles.name}>
                        Vinicius Silva
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.coins}>
                            280 Coins
                        </Text>
                        <FontAwesome5 name="card" size={14} color={'#fff'} />
                    </View>
                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 22 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="exit" size={22} />
                        <Text style={{ marginHorizontal: 8, fontSize: 15 }}>
                            Sign Out
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    )
}