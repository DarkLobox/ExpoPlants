import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Components
import PlantAddScreen from "./screens/PlantAddScreen";
import PlantDetailScreen from "./screens/PlantDetailScreen";
import PlantListScreen from "./screens/PlantListScreen";
import ProfileScreen from "./screens/ProfileScreen";

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
  return (
    <HomeStackNavigator.Navigator initialRouteName="PlantListScreen">
      <HomeStackNavigator.Screen
        name="PlantListScreen"
        component={PlantListScreen}
      />
      <HomeStackNavigator.Screen
        name="PlantAddScreen"
        component={PlantAddScreen}
      />
      <HomeStackNavigator.Screen
        name="ProfileScreen"
        component={ProfileScreen}
      />
      <HomeStackNavigator.Screen
        name="PlantDetailScreen"
        component={PlantDetailScreen}
      />
    </HomeStackNavigator.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs(props) {
  return (
    <Tab.Navigator
      initialRouteName="PlantList"
      screenOptions={{ tabBarActiveTintColor: "purple" }}
    >
      <Tab.Screen
        name="PlantList"
        component={MyStack}
        options={{
          tabBarLabel: "PlantList",
          tabBarBadge: 10,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="PlantAdd"
        component={PlantAddScreen}
        options={{ tabBarLabel: "Home", tabBarBadge: 10, headerShown: true }}
      />
      <Tab.Screen
        name="Profile"
        children={()=><ProfileScreen user={props.user} signOut={props.signOut}/>}
        //component={ProfileScreen}
        options={{ tabBarLabel: "Profile", tabBarBadge: 10, headerShown: true }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation(props) {
  return (
    <NavigationContainer>
      <MyTabs user={props.user} signOut={props.signOut}/>
    </NavigationContainer>
  );
}
