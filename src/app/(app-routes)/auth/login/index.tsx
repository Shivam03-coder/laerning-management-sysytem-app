import { View, Text } from "react-native";
import React from "react";
import LoginScreen from "@/screens/login.screens";

const login = () => {
  return (
    <View className="flex-1 bg-secondary">
      <LoginScreen />
    </View>
  );
};

export default login;
