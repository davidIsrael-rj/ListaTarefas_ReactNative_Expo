import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import logo from "../assets/images/logo.png"
import { Alert } from "react-native";
import { colors } from "../constants/colors";

export default function RootLayout() {

  const tastks = [
    { id: 1, completed: true, text: "Fazer café" },
    { id: 2, completed: false, text: "Estudar React Native" },
    { id: 3, completed: false, text: "Acadademia" },
  ]
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.rowContainer}>
        <Image style={styles.image} source={logo} />
        <Text style={styles.title}>Minhas Tarefas</Text>
      </View>

      <View style={styles.rowContainer}>
        <TextInput style={styles.input} />
        <Pressable
          onPress={() => Alert.alert("Olá Mundo!!")}
          style={({ pressed }) => [styles.button, { backgroundColor: pressed ? "blue" : colors.primary }]}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
      <FlatList 
        data={tastks}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Text>{item.text}</Text>}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  image: {
    width: 70,
    height: 70
  },
  title: {
    fontSize: 30,
    fontFamily: "Calibri",
    fontWeight: 600,
    color: colors.primary
  },
  input: {
    height: 40,
    paddingHorizontal: 16,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    flexGrow: 1,
  },
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
  textContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  mainContainer: {
    margin: 20
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginBottom: 20
  }

})
