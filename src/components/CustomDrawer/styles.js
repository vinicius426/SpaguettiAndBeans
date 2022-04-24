import { StyleSheet } from "react-native";
import { theme } from "../../Styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    name: {
        color: theme.colors.text.primary,
        fontSize: 18,
    },
    coins: {
        color: theme.colors.text.primary,
        marginRight: 5
    }
})