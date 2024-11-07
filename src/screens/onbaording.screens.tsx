import Lottie from "@/components/shared/lottie";
import Typewrittereffect from "@/components/shared/Typewrittereffect";
import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";

const OnboardingScreens = () => {
  return (
    <View className="flex-1 gap-7  w-[90%] mx-auto justify-center items-center">
      <Lottie src={require("../assets/animation.json")} />
      <View className="flex items-center py-5  gap-3  w-full">
        <Typewrittereffect />
      </View>
      <TouchableOpacity
        onPress={() => router.push("/(app-routes)/appintro")}
        className="bg-primary w-full mx-auto rounded-3xl py-4 text-light"
      >
        <Text className="text-light  text-center text-2xl font-bold font-inter">
          CONTINUE
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingScreens;
