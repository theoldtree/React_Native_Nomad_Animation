import React, { useState } from "react";
import styled from "styled-components/native";
import IonIcons from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Alert } from "react-native";
const Container = styled.View`
  flex: 1;
  background-color: lightcyan;
  padding: 5%;
`;

const BtnText = styled.Text``;
const Title = styled.Text`
  text-align: center;
  color: blue;
  margin: 5% 3%;
  font-size: 22px;
  font-weight: 500;
`;

const Emotions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2% 0%;
`;

const Emotion = styled.TouchableOpacity`
  padding: 2%;
  align-items: center;
  justify-content: center;
  background-color: white;
  elevation: 5;
  border-width: ${(props) => (props.selected ? "2px" : "0px")};
  border-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const EmotionText = styled.Text`
  font-size: 18px;
`;

const emotions = ["😀", "🥰", "😎", "😣", "😩", "😢", "😡"];

const Record = styled.TextInput`
  width: 100%;
  border-radius: 15px;
  background-color: white;
  padding: 3%;
  font-size: 15px;
  margin: 3% 0%;
`;

const HomeBtn = styled.TouchableOpacity`
  background-color: white;
  width: 100%;
  position: absolute;
  bottom: 5%;
  left: 5%;
  padding: 2%;
  align-items: center;
  border-radius: 15px;
  elevation: 5;
`;

const SaveBtn = styled.TouchableOpacity`
  width: 100%;
  padding: 3%;
  justify-content: center;
  align-items: center;
  background-color: lightcoral;
  border-radius: 15px;
`;
const SaveBtnText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 500;
`;

export default function Write({ navigation: { navigate } }) {
  const [selectedemotion, setEmotion] = useState(null);
  const [feeling, setFeeling] = useState("");
  const onChangeFeeling = (text) => setFeeling(text);
  const onEmotionPress = (emotion) => setEmotion(emotion);
  const onSubmit = () => {
    if (feeling === "" || emotion === null) {
      return Alert.alert("Please complete the form or select emotion!");
    }
  };
  return (
    <Container>
      <Title>How dow you feel today?</Title>
      <Emotions>
        {emotions.map((emotion, index) => (
          <Emotion
            key={index}
            onPress={() => onEmotionPress(emotion)}
            selected={emotion === selectedemotion}
          >
            <EmotionText>{emotion}</EmotionText>
          </Emotion>
        ))}
      </Emotions>
      <Record
        onSubmitEditing={onSubmit}
        returnKeyLabel="done"
        placeholder="Write your feelings..."
        onChangeText={onChangeFeeling}
      />
      <SaveBtn>
        <SaveBtnText>Save</SaveBtnText>
      </SaveBtn>
      <HomeBtn onPress={() => navigate("Home")}>
        <AntDesign name="home" size={24} color="black" />
        <BtnText> Home </BtnText>
      </HomeBtn>
    </Container>
  );
}
