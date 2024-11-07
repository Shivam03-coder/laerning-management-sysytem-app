import Lottie from "@/components/layout/(onboarding)/lottie";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Text } from "react-native";
import { View } from "react-native";

const OnboardingScreens = () => {
  return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Lottie />
      <View className="space-x-7">
        <Text className="text-4xl text-blue-950 font-bold"> L-M-S </Text>
      </View>
      <Button color={"red"} title="contINUE" />
    </LinearGradient>
  );
};

export default OnboardingScreens;
