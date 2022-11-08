import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PlantListScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: "center", marginTop: "20%" }}>
        PlantList Screen
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("PlantDetailScreen")}
        style={{
          backgroundColor: "purple",
          padding: 10,
          marginTop: "20%",
          width: "50%",
          alignSelf: "center",
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 15, textAlign: "center", color: "white" }}>
          Go to Plant Detail
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlantListScreen;