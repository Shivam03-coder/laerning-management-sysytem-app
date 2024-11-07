import "../../global.css";
import { View, Text, LogBox } from "react-native";
import React, { useEffect, useState } from "react";
import { SplashScreen, Stack } from "expo-router";
import AppLoading from 'expo-app-loading';
import {
  useFonts as useMonoFonts,
  SpaceMono_400Regular,
} from "@expo-google-fonts/space-mono";
import {
  Inter_400Regular,
  useFonts as useInterFonts,
} from "@expo-google-fonts/inter";

import {
  KoHo_400Regular,
  KoHo_700Bold,
  useFonts as useKohoFonts,
} from "@expo-google-fonts/koho";
export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  // Load fonts using expo-google-fonts
  const [spaceMonoLoaded] = useMonoFonts({
    SpaceMono_400Regular,
  });

  const [interLoaded] = useInterFonts({
    Inter_400Regular,
  });

  const [kohoFontloaded] = useKohoFonts({
    KoHo_400Regular,
    KoHo_700Bold,
  });

  // Hide splash screen when both fonts are loaded
  useEffect(() => {
    if (spaceMonoLoaded && interLoaded && kohoFontloaded) {
      SplashScreen.hideAsync();
    }
  }, [spaceMonoLoaded, interLoaded, kohoFontloaded]);

  // Disable all logs
  useEffect(() => {
    LogBox.ignoreAllLogs(true);
  }, []);

  // Show an empty view until fonts are loaded
  if (!spaceMonoLoaded || !interLoaded || !kohoFontloaded) {
    return <AppLoading />;
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
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(app-routes)/appintro" />
        </Stack>
      )}
    </>
  );
};
