import { Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={{ marginLeft: 15, marginTop: 30 }}>
      <Text style={{ fontWeight: "bold", fontSize: 28 }}>
        SignIn with Google Using React Native Expo and Firebase
      </Text>
    </View>
  );
};

export default Header;
