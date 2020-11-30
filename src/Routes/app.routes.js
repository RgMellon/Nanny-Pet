import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import AppBottonRoutes from "./appBottom.routes";

const Stack = createStackNavigator();

import CadAnfi from "../pages/CadAnfi";
import PerfilAnfi from "../pages/PerfilAnfi";
import EditPerfil from "../pages/EditPerfil";

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTabNavigator"
        component={AppBottonRoutes}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="CadAnfi"
        options={{
          headerTitle: "Tornar anfitrião",
        }}
        component={CadAnfi}
      />
      <Stack.Screen
        name="PerfilAnfi"
        options={{
          headerTitle: "Perfil",
        }}
        component={PerfilAnfi}
      />
       <Stack.Screen
        name="EditPerfil"
        options={{
          headerTitle: "Editar Perfil",
        }}
        component={EditPerfil}
      />
    </Stack.Navigator>
  );
};

export default Routes;
