import { StyleSheet } from "react-native/types";
const POSTER_ASPECT_RATIO = 500 / 750

const styles = StyleSheet.create({

    container: {
        aspectRatio: POSTER_ASPECT_RATIO,
        width: "100%",
        position: "relative",
    }

})

export default styles