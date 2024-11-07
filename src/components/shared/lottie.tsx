import LottieView from "lottie-react-native";
import React, { useRef } from "react";

const Lottie = ({ src }: { src: any }) => {
  const animation = useRef<LottieView>(null);
  return (
    <LottieView
      autoPlay
      ref={animation}
      style={{
        width: 350,
        height: 350,
      }}
      source={src}
      loop
    />
  );
};

export default Lottie;
