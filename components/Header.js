// components/Header.js
import React, { useCallback, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Prevent the splash screen from auto-hiding until we're ready
SplashScreen.preventAutoHideAsync();
const { width: screenWidth } = Dimensions.get("window");

const Header = ({ toggleDrawer }) => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Load fonts and other assets
        await Font.loadAsync({
          "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"), // Ensure path is correct
        });

        await new Promise((resolve) => setTimeout(resolve, 500));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.headerContainer} onLayout={onLayoutRootView}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Icon name="bars" size={30} color="#000" />
      </TouchableOpacity>

      <Text style={styles.headerTitle}>WEATHRY</Text>

      <TouchableOpacity onPress={toggleDrawer}>
        <Icon name="circle-user" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: screenWidth * 0.92,
    height: 73,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  headerTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Header;
