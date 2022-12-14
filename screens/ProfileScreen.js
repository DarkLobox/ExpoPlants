import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";

const ProfileScreen = ({ user, signOut }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 100, alignItems: "center" }}>
        <Text style={styles.text}>{user.displayName}</Text>
        <Image
          source={{ uri: user.photoURL }}
          style={{ height: 300, width: 300, borderRadius: 150, margin: 50 }}
        />
        <TouchableOpacity style={styles.button} title="Sign Out" onPress={signOut}>
          <Text style={styles.textButton}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F5FA",
    alignItems: "center",
  },
  text: {
    fontSize: 23,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#E52527",
    borderRadius: 20,
  },
  textButton: {
    color: "#fff",
    padding: 12,
  }
});

export default ProfileScreen;
