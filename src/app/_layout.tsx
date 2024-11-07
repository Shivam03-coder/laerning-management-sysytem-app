import "../../global.css";
import { View, Text, LogBox } from "react-native";
import React, { useEffect, useState } from "react";
import { SplashScreen } from "expo-router";
import {
  useFonts as useMonoFonts,
  SpaceMono_400Regular,
} from "@expo-google-fonts/space-mono";
import {
  Inter_400Regular,
  useFonts as useInterFonts,
} from "@expo-google-fonts/inter";
import Onboarding from "./(app-routes)/onboarding";
export { ErrorBoundary } from "expo-router";

// Prevent splash screen from hiding until fonts are loaded
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  // Load fonts using expo-google-fonts
  const [spaceMonoLoaded] = useMonoFonts({
    SpaceMono_400Regular,
  });

  const [interLoaded] = useInterFonts({
    Inter_400Regular,
  });

  // Hide splash screen when both fonts are loaded
  useEffect(() => {
    if (spaceMonoLoaded && interLoaded) {
      SplashScreen.hideAsync();
    }
  }, [spaceMonoLoaded, interLoaded]);

  // Disable all logs
  useEffect(() => {
    LogBox.ignoreAllLogs(true);
  }, []);

  // Show an empty view until fonts are loaded
  if (!spaceMonoLoaded || !interLoaded) {
    return <View />;
  }

  return <RootNavLayout />;
};

export default RootLayout;

const RootNavLayout = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);

  return (
    <>
      {isUserLoggedIn ? (
        <View>
          <Text style={{ fontFamily: "SpaceMono_400Regular", fontSize: 20 }}>
            Welcome to the main app!
          </Text>
        </View>
      ) : (
        <Onboarding />
      )}
    </>
  );
};