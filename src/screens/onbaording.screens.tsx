import Lottie from "@/components/layout/(onboarding)/lottie";
import Typewrittereffect from "@/components/shared/Typewrittereffect";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Pressable, Text } from "react-native";
import { View } from "react-native";

const OnboardingScreens = () => {
  return (
    <View className="flex-1 gap-7  w-[90%] mx-auto justify-center items-center">
      <Lottie />
      <View className="flex items-center py-5 gap-3  w-full">
        <Typewrittereffect />
      </View>
      <Pressable className="bg-primary w-full mx-auto rounded-3xl py-5 text-light">
        <Text className="text-light  text-center text-3xl font-bold font-inter">
          CONTINUE
        </Text>
      </Pressable>
    </View>
  );
};

export default OnboardingScreens;
