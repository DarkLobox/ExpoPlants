import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const PlantDetailScreen = () => {
  return (
    <View style={styles.view}>
      <View style={styles.viewPlanta}>
        <View style={styles.viewCabecera}>
          <Text>Nombre</Text>
          <Image
            source={{
              uri: "https://principia.io/media/uploads/images/colegio-domus/cover-plantas.jpg",
            }}
            style={styles.imagen}
          />
          <Text>Descripcion</Text>
        </View>
        <View style={styles.viewIrrigaciones}>
          <Text>Irrigaciones: 0</Text>
          <Text>Lunes: 00:00</Text>
          <Text>Martes: 00:00</Text>
          <Text>Miercoles: 00:00</Text>
          <Text>Jueves: 00:00</Text>
          <Text>Viernes: 00:00</Text>
        </View>
        <View style={styles.viewBotones}>
          <Text>Fecha de registro: 00/00/0000</Text>
          <TouchableOpacity>
            <Text>Regar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Eliminar Planta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: { backgroundColor: "#000", padding: 30 },
  viewPlanta: {
    backgroundColor: "#222",
    padding: 60,
  },
  viewCabecera: { backgroundColor: "#444", padding: 10 },
  viewIrrigaciones: { backgroundColor: "#666", padding: 10 },
  viewBotones: {backgroundColor: "#888", padding: 10},
  imagen: {
    height: 200,
    width: 200,
    borderRadius: 100,
    margin: 30,
  },
});

export default PlantDetailScreen;
