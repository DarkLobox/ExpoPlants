import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import "expo-dev-client";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import React, { useState, useEffect } from "react";
import { firebase } from "./config";
import Navigation from "./Navigation";

export default function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  GoogleSignin.configure({
    webClientId:
      "499295162321-99gvpskd10eh3afuc0e5jpdrhjn1ue6r.apps.googleusercontent.com",
  });

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onGoogleButtonPress = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const user_sign_in = auth().signInWithCredential(googleCredential);
    user_sign_in
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
    //return auth().signInWithCredential(googleCredential);
  };

  //Logout
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      //await GoogleSignin.signOut();
      await auth().signOut();
    } catch (error) {
      console.error(error);
    }
  };

  if (initializing) return null;

  if (!user) {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://riego-plantas.web.app/assets/logo.png",
          }}
          style={styles.imagen}
        />
        <Text style={styles.text}>Login</Text>
        <GoogleSigninButton style={styles.button} onPress={onGoogleButtonPress} />
      </View>
    );
  }
  return <Navigation user={user} signOut={signOut} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9E3F1",
    alignItems: "center",
  },
  text: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#485785"
  },
  imagen: {
    marginTop: 60,
    height: 300,
    width: 300,
    margin: 10,
  },
  button: {
    width: 250,
    height: 65,
    marginTop: 100,
    borderRadius: 60,
  },
});
