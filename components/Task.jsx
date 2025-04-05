import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";

export default function Task({text}){
    return <View style={styles.rowContainer}>
        <Pressable>
            <Ionicons
                name="checkmark-circle"
                size={32}
                color={colors.primary}
            />
        </Pressable>
        <Text>{text}</Text>
    </View>
}

const styles = StyleSheet.create({
    rowContainer: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginBottom: 10
    }
})