import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions } from "react-native";

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
        <Text>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  view: {backgroundColor: "#555", padding: 30, width: win.width, height: win.height},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: "#fff"
  },
});

export default PlantAddScreen;
