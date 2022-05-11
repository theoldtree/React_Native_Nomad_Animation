import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useRef } from "react";
import styled from "styled-components/native";
import { Navigator } from "./navigator/navigator";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
