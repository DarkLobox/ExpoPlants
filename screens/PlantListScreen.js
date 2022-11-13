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
      nombre: "Margatira",
      color: "Esta planta ...",
      id: "001",
    },
    {
      image: url_img,
      nombre: "Girasol",
      color: "Esta planta ...",
      id: "002",
    },
    {
      image: url_img,
      nombre: "Pino",
      color: "Esta planta ...",
      id: "003",
    },
    {
      image: url_img,
      nombre: "Menta",
      color: "Esta planta ...",
      id: "004",
    },
    {
      image: url_img,
      nombre: "Eucalipto",
      color: "Esta planta ...",
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
    backgroundColor: "#D9E3F1",
    padding: 10,
  },
});

export default PlantListScreen;
