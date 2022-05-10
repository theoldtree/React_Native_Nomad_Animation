import React, { useState, useRef } from "react";
import styled from "styled-components/native";
import { Animated } from "react-native";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const Box = styled.TouchableOpacity`
  background-color: tomato;
  width: 200px;
  height: 200px;
`;
const AnimatedBox = Animated.createAnimatedComponent(Box);

export default function App() {
  const Y = useRef(new Animated.Value(0)).current;
  const [up, setUp] = useState(false);
  const toggleUp = () => setUp((prev) => !prev);
  const goUp = () => {
    Animated.timing(Y, {
      toValue: up ? 200 : -200,
      useNativeDriver: true,
    }).start(toggleUp);
  };
  return (
    <Container>
      <AnimatedBox
        onPress={goUp}
        style={{
          transform: [{ translateY: Y }],
        }}
      />
    </Container>
  );
}
