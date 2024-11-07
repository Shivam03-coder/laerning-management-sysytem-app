import { View, Text, ScrollView } from "react-native";
import React from "react";
import Lottie from "@/components/shared/lottie";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LoginForm from "@/components/layout/_auth/loginform";

const LoginScreen = () => {
  return (
    <ScrollView>
      <View className="self-center mt-7 flex gap-3">
        <Lottie src={require("../assets/login.json")} />
        <Text className="text-center text-4xl text-primary font-semibold">
          Welcome Back !{" "}
          <MaterialCommunityIcons
            name="cast-education"
            size={34}
            color="black"
          />
        </Text>
        <Text className="text-center opacity-80 text-2xl font-raleway font-medium text-primary">
          Login To Your Existing Account !
        </Text>

        <LoginForm />
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
