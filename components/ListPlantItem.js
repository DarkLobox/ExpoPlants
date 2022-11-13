import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ListPlantItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => navigation.navigate("Detalles de Planta")}
      >
        <Image source={{ uri: item.image }} style={styles.imagen} />
        <View style={styles.viewColumn}>
          <View style={styles.viewRow}>
            <Text style={styles.textNombre}>Nombre: {item.nombre}</Text>
            <Text style={styles.textFecha}>Fecha: {item.id}</Text>
          </View>
          <View style={styles.viewRow}>
            <Text style={styles.textDescripcion}>
              Descripcion: {item.color}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: { padding: 10, },
  touchableOpacity: {
    backgroundColor: "#E4EBF5",
    padding: 20,
    flex: 1,
    flexDirection: "row",
    borderRadius: 25,
  },
  viewColumn: { flex: 1, flexDirection: "column" },
  viewRow: { flex: 1, flexDirection: "row" },
  textNombre: { color: "#485793" },
  textDescripcion: { color: "#52575C" },
  textFecha: { color: "#83888F" },
  imagen: {
    height: 100,
    width: 100,
    borderRadius: 50,
    margin: 10,
  },
});

export default ListPlantItem;
