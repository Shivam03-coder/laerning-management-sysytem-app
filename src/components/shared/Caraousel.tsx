import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { swiperdata } from "@/helpers";
import { router } from "expo-router";

const Caraousel = () => {
  const renderItem = ({ item }: { item: onbaordingSwiperdata }) => {
    return (
      <View className="flex-1 w-[95%] mx-auto justify-center items-center mt-5">
        <Image className="w-full" resizeMode="contain" source={item.img} />
        <View className="flex justify-center gap-4 py-4">
          <Text className=" w-full text-justify text-2xl font-bold text-primary font-inter">
            {item.title}
          </Text>
          <Text className="p-3 text-justify text-2xl font-semibold text-primary font-inter">
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
    />
  );
};

export default Caraousel;

const commonstyles = StyleSheet.create({
  dotStyle: {
    backgroundColor: "#ffffff",
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  ActivedotStyle: {
    backgroundColor: "#001f3f",
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
