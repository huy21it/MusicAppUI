import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "src/Screens/MainScreen/MainScreen";
import VoiceSettingScreen from "src/Screens/VoiceSettingScreen/VoiceSettingScreen";

export type RootStackParamList = {
  Main: undefined;
  VoiceSetting: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="VoiceSetting"
          component={VoiceSettingScreen}
          options={{ animation: "slide_from_right" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
