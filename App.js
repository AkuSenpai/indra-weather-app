import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import { Dimensions, View } from "react-native";
import MainWeatherDisplay from "./components/MainWeatherDisplay";

export default function App() {
  const { width: screenWidth } = Dimensions.get("window");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1, // Add this
          borderColor: "pink",
          borderWidth: 2,
          padding: 16,
          width: screenWidth,
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Header />
        <MainWeatherDisplay
          city="San Francisco"
          state="CA"
          temperature="72"
          condition="Partly Cloudy"
          feelsLike="70"
          highTemp="75"
          lowTemp="65"
          lastUpdated="2:30 PM"
          sunrise="6:42 AM"
          sunset="7:23 PM"
        />
      </View>
    </SafeAreaView>
  );
}
