import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

const PlantDetailScreen = () => {
  return (
    <View style={styles.view}>
      <View style={styles.viewPlanta}>
        <Text style={styles.text}>Nombre</Text>
        <View style={styles.viewCabecera}>
          <Image
            source={{
              uri: "https://principia.io/media/uploads/images/colegio-domus/cover-plantas.jpg",
            }}
            style={styles.imagen}
          />
          <Text style={styles.text}>Descripcion</Text>
        </View>
      </View>
      <View style={styles.viewIrrigaciones}>
        <Text style={styles.text}>Irrigaciones: 0</Text>
        <Text style={styles.textButton}>Lunes: 00:00</Text>
        <Text style={styles.textButton}>Martes: 00:00</Text>
        <Text style={styles.textButton}>Miercoles: 00:00</Text>
        <Text style={styles.textButton}>Jueves: 00:00</Text>
        <Text style={styles.textButton}>Viernes: 00:00</Text>
      </View>
      <View style={styles.viewOpciones}>
        <Text style={styles.text}>Fecha de registro: 00/00/0000</Text>
        <View style={styles.viewBotones}>
          <TouchableOpacity style={styles.buttonRegar}>
            <Text style={styles.textButton}>Regar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonEliminar}>
            <Text style={styles.textButton}>Eliminar Planta</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  },
  viewPlanta: {
    backgroundColor: "#E4EBF5",
  },
  viewCabecera: {
    backgroundColor: "#E4EBF5",
    padding: 10,
    alignItems: "center",
  },
  viewIrrigaciones: {
    backgroundColor: "#5B62F4",
    padding: 10,
    alignItems: "center",
  },
  viewOpciones: {
    backgroundColor: "#E4EBF5",
    padding: 10,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  imagen: {
    height: 200,
    width: 200,
    borderRadius: 100,
    margin: 30,
  },
  viewBotones: { flex: 1, flexDirection: "row" },
  buttonRegar: {
    backgroundColor: "#5B62F4",
    padding: 6,
    alignItems: "center",
    width: win.width / 3,
    height: 40,
  },
  buttonEliminar: {
    backgroundColor: "#E52527",
    padding: 6,
    alignItems: "center",
    width: win.width / 3,
    height: 40,
  },
  textButton: { color: "#fff", fontWeight: "bold" },
  text: { color: "#7B8AB8" },
});

export default PlantDetailScreen;
