import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../constants/colors";

export default function Button({funcao}) {
    return (
        <Pressable
            onPress={funcao}
            style={({ pressed }) => [
                styles.button,
                { backgroundColor: pressed ? "#191970" : "#836fff" }
            ]}>
            <Text style={styles.buttonText}>+</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({

    button: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.primary,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "white",
        fontSize: 20
    },


})
