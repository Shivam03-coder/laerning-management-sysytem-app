import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import TypeWriter from "react-native-typewriter";

const Typewrittereffect = () => {
  const [typing, setTyping] = useState<1 | 0 | -1>(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTyping((prevTyping) => (prevTyping === 1 ? -1 : 1));
    }, 3000);

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, []);

  return (
    <>
      <Text className="text-4xl  uppercase text-primary font-bold">
        Quokka-Hub
      </Text>
      <Text className="text-2xl opacity-70   text-primary font-bold">
        A Student Management Tool.
      </Text>
      <TypeWriter
        typing={typing}
        initialDelay={500}
        maxDelay={100}
        minDelay={20}
        fixed={true}
      >
        <Text className="text-2xl text-primary font-bold">
          Small Steps, Big Knowledge
        </Text>
      </TypeWriter>
    </>
  );
};

export default Typewrittereffect;
