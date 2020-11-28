import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import AppBottonRoutes from "./appBottom.routes";

const Stack = createStackNavigator();

// import { Container } from './styles';

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={AppBottonRoutes}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
