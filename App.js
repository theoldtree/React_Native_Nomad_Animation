import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Realm from "realm";
import { Navigator } from "./navigator/navigator";

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
