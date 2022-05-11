import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Write from "../screens/Write";

const Tabs = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Write" component={Write} />
    </Tabs.Navigator>
  );
};
