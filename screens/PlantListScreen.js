import React from "react";
import { StyleSheet, SafeAreaView, FlatList, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ListPlantItem from "../components/ListPlantItem";

const PlantListScreen = () => {
  const navigation = useNavigation();
  const url_img =
    "https://principia.io/media/uploads/images/colegio-domus/cover-plantas.jpg";
  const productos = [
    {
      image: url_img,
      nombre: "iphone12",
      color: "Blanco",
      id: "001",
    },
    {
      image: url_img,
      nombre: "iphone13",
      color: "Negro",
      id: "002",
    },
    {
      image: url_img,
      nombre: "iphone14",
      color: "Azul",
      id: "003",
    },
    {
      image: url_img,
      nombre: "iphone15",
      color: "Amarrillo",
      id: "004",
    },
    {
      image: url_img,
      nombre: "iphone16",
      color: "Amarrillo",
      id: "005",
    },
  ];

  return (
    <SafeAreaView>
      <FlatList
        style={styles.flatList}
        data={productos}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <ListPlantItem item={item} />}
      />
    </SafeAreaView>
  );
};

const win = Dimensions.get("window");
const styles = StyleSheet.create({
  flatList: {
    backgroundColor: "#fff",
    padding: 10,
  },
});

export default PlantListScreen;
