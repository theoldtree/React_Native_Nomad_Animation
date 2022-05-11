import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Btn = styled.TouchableOpacity``;
const BtnText = styled.Text``;

export default function Write({ navigation: { navigate } }) {
  return (
    <Container>
      <Btn onPress={() => navigate("Home")}>
        <BtnText> Home </BtnText>
      </Btn>
    </Container>
  );
}
