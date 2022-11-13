import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

// Components
import PlantAddScreen from "./screens/PlantAddScreen";
import PlantDetailScreen from "./screens/PlantDetailScreen";
import PlantListScreen from "./screens/PlantListScreen";
import ProfileScreen from "./screens/ProfileScreen";

import { firebase } from "./config";

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
  return (
    <HomeStackNavigator.Navigator initialRouteName="Plantas">
      <HomeStackNavigator.Screen
        name="Plantas"
        component={PlantListScreen}
      />
      <HomeStackNavigator.Screen
        name="Agregar Planta"
        component={PlantAddScreen}
      />
      <HomeStackNavigator.Screen
        name="Perfil"
        component={ProfileScreen}
      />
      <HomeStackNavigator.Screen
        name="Detalles de Planta"
        component={PlantDetailScreen}
      />
    </HomeStackNavigator.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs({ user, signOut }) {
  return (
    <Tab.Navigator
      initialRouteName="Plantas"
      screenOptions={{ tabBarActiveTintColor: "#7B8AB8" }}
    >
      <Tab.Screen
        name="Plantas"
        component={MyStack}
        options={{
          tabBarLabel: "Plantas",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Agregar Planta"
        component={PlantAddScreen}
        options={{
          tabBarLabel: "Agregar Planta",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" color={color} size={size} />
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Perfil"
        children={() => <ProfileScreen user={user} signOut={signOut} />}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
          headerShown: true,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation({ user, signOut }) {
  //Prueba llamada a firebase
  /*const getData = () => {
    firebase
      .firestore()
      .collection("plants")
      .doc(user.email)
      .collection("plants")
      .onSnapshot((query) => {
        const plants = [];
        query.forEach((element) => {
          plants.push({ ...element.data(), id: element.id });
        });
        console.log("Entre al getData");
        console.log(plants);
        //setFlowerpots(plants);
      });
  };
  getData();*/

  return (
    <NavigationContainer>
      <MyTabs user={user} signOut={signOut} />
    </NavigationContainer>
  );
}
