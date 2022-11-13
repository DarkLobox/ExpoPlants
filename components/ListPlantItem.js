import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ListPlantItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => navigation.navigate("PlantDetailScreen")}
      >
        <Image source={{ uri: item.image }} style={styles.imagen} />
        <Text style={styles.textNombre}>Nombre: {item.nombre}</Text>
        <Text style={styles.textFecha}>Fecha: {item.id}</Text>
        <Text style={styles.textDescripcion}>Descripcion: {item.color}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {padding: 10},
  touchableOpacity: { backgroundColor: "#444", padding:20 },
  textNombre: {},
  textDescripcion: {},
  textFecha: {},
  imagen: {
    height: 100,
    width: 100,
    borderRadius: 50,
    margin: 10,
  },
});

export default ListPlantItem;
