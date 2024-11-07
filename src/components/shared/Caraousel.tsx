import { View, Text, Image } from "react-native";
import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { swiperdata } from "@/helpers";
import { router } from "expo-router";
import { commonstyles } from "@/styles";

const Caraousel = () => {
  const renderItem = ({ item }: { item: onbaordingSwiperdata }) => {
    return (
      <View className="flex-1 w-[95%] mx-auto  items-center mt-2">
        <Image className="w-full" resizeMode="contain" source={item.img} />
        <View className="flex justify-center gap-4 py-2 px-2">
          <Text className="w-full underline underline-offset-4 text-justify text-3xl font-bold text-primary font-koho">
            {item.title}
          </Text>
          <Text className="p-3 text-justify text-2xl font-bold  opacity-80 text-primary font-inter">
            {item.desc}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={swiperdata}
      showSkipButton={false}
      dotStyle={commonstyles.dotStyle}
      activeDotStyle={commonstyles.ActivedotStyle}
      bottomButton
      onDone={() => {
        router.push("/auth/login");
      }}
      onSkip={() => {
        router.push("/auth/login");
      }}
      renderNextButton={() => (
        <View
          style={commonstyles.buttonContainer}
          className="mx-auto mb-5 bg-primary font-inter rounded-2xl "
        >
          <Text className="text-secondary text-3xl text-center font-semibold">
            NEXT
          </Text>
        </View>
      )}
      renderDoneButton={() => (
        <View
          style={commonstyles.buttonContainer}
          className="mx-auto mb-5 bg-primary font-inter rounded-2xl "
        >
          <Text className="text-secondary text-3xl text-center font-semibold">
            DONE
          </Text>
        </View>
      )}
    />
  );
};

export default Caraousel;
