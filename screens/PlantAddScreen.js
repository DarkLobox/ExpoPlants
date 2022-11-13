import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";

const PlantAddScreen = () => {
  const [type, onChangeType] = React.useState(null);
  const [description, onChangeDescription] = React.useState(null);

  return (
    <View style={styles.view}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeType}
        value={type}
        placeholder="Tipo"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeDescription}
        value={description}
        placeholder="Descripcion"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

const win = Dimensions.get("window");
const styles = StyleSheet.create({
  view: {
    backgroundColor: "#D9E3F1",
    padding: 30,
    width: win.width,
    height: win.height,
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#F0F5FA",
    borderRadius: 8,
    marginTop: 30,
    width: 370,
    height: 60,
  },
  button: {
    backgroundColor: "#E4EBF5",
    padding: 20,
    borderRadius: 15,
    marginTop: 30,
    width: 150,
    height: 70,
    alignItems: "center",
  },
  textButton: {
    color: "#968ABD",
    fontSize: 18,
  },
});

export default PlantAddScreen;
