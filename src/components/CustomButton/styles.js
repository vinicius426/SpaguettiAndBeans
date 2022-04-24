import { StyleSheet } from "react-native"
import { block } from "react-native-reanimated"
import { theme } from "../../Styles/theme"

export const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        padding: 10,
        marginVertical: 10,
        borderRadius: 8
    },
    buttonText: {
        color: theme.colors.text.primary,
        fontWeight: 'bold'
    }

})