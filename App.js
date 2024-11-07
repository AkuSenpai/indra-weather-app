import { View, Dimensions, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome6";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useCallback, useEffect, useState } from "react";


// Prevent the splash screen from auto-hiding until we're ready
SplashScreen.preventAutoHideAsync();

export default function App() {
  const { width: screenWidth } = Dimensions.get("window");
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Load fonts and other assets
        await Font.loadAsync({
          "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"), // Ensure path is correct
        });

        // Simulate a slow loading experience (optional)
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Signal that the app is ready
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // Hide the splash screen when the app is ready and has been laid out
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null; // Return null until the app is ready
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          // backgroundColor: "pink",
          borderColor: "black",
          borderWidth: 2,
          flex: 1,
          padding: 16,
          width: screenWidth,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: screenWidth * 0.9,
            height: 73,
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 18,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 16,
          }}
          onLayout={onLayoutRootView}
        >
          <TouchableOpacity onPress={() => toggleDrawer()}>
            <Icon name="bars" size={30} color="#000" />
          </TouchableOpacity>

          <Text
            style={{
              fontFamily: "Roboto-Medium",
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            WEATHRY
          </Text>

          <TouchableOpacity onPress={() => toggleDrawer()}>
            <Icon name="circle-user" size={30} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
