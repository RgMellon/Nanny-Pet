import React from "react";

import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";

import { createStackNavigator } from "@react-navigation/stack";
// import { Container } from './styles';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
