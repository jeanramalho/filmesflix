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

    linearStyle: {
        height: "40%",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
    }
})

export default styles