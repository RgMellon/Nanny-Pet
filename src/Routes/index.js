import React from "react";
import { View } from "react-native";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
// import { Container } from './styles';

const Routes = () => {
  //vai no back, vereficia se tem cadastro, se tiver, aqui vem true
  const user = true;

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
