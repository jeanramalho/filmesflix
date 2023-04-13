import { StyleSheet } from "react-native/types";
import { useTheme } from "@react-navigation/native";

const theme = useTheme()

const styles = StyleSheet.create({
    container: {
         flex: 1, 
         position: "relative" 
    },

    scrollContainer: {
        flex: 1,
        backgroundColor: theme.colors.background,
    }
})

export default styles