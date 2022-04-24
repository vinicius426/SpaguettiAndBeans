import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from './styles'

export function CustomButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>
                    Sign in
                </Text>
            </View>
        </TouchableOpacity>
    )
}