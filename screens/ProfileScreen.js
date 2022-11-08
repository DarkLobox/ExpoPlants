import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from "react-native";

const ProfileScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 100, alignItems: "center" }}>
        <Text style={styles.text}>Welcome, {props.user.displayName}</Text>
        <Image
          source={{ uri: props.user.photoURL }}
          style={{ height: 300, width: 300, borderRadius: 150, margin: 50 }}
        />
        <Button title="Sign Out" onPress={props.signOut} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  text: {
    fontSize: 23,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
