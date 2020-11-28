import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import React from "react";

import Routes from "./src/Routes";

import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" />

      <Routes />
    </NavigationContainer>
  );
}
