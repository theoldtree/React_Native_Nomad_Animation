import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { HEIGHT } from "../styles/styles";

const Container = styled.View`
  flex: 1;
  background-color: lightcyan;
`;

const Btn = styled.TouchableOpacity`
  background-color: skyblue;
  position: absolute;
  right: 50px;
  bottom: 50px;
  height: 80px;
  width: 80px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  elevation: 5;
`;
const Title = styled.Text`
  color: blue;
  font-size: 38px;
  margin: 50px 50px;
  margin-bottom: 100px;
`;

export default function Home({ navigation: { navigate } }) {
  return (
    <Container>
      <Title>My Journal</Title>
      <Btn onPress={() => navigate("Write")}>
        <Ionicons name="add" color="white" size={40} />
      </Btn>
    </Container>
  );
}
