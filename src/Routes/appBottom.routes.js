import React from "react";

import { FontAwesome5 } from "@expo/vector-icons";

import Home from "../pages/Home";
import CadPet from "../pages/CadPet";
import PerfilUser from "../pages/PerfilUser";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AppTab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: "#FFC249",
        inactiveTintColor: "#999999",
      }}
    >
      <AppTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={16} color={color} />
          ),
        }}
      />

      <AppTab.Screen
        name="CadPet"
        component={CadPet}
        options={{
          tabBarLabel: "Cadastrar Pet",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="paw" size={16} color={color} />
          ),
        }}
      />

      <AppTab.Screen
        name="PerfilUser"
        component={PerfilUser}
        options={{
          tabBarLabel: "Menu",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="bars" size={16} color={color} />
          ),
        }}
      />
    </AppTab.Navigator>
  );
};

export default AppRoutes;
