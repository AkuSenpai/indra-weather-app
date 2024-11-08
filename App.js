import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import MainWeatherDisplay from "./components/MainWeatherDisplay";
import WeatherMetrics from "./components/WeatherMetrics";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";
import WeatherAlerts from "./components/WeatherAlerts";
import AirQualityIndex from "./components/AirQualityIndex"; // Import the new component
import PrecipitationForecast from "./components/PrecipitationForecast";

const { width: screenWidth } = Dimensions.get("window");

const WeatherSection = ({ component: Component, ...props }) => (
  <Component {...props} />
);

export default function App() {
  // Sample precipitation forecast data
  const samplePrecipitationForecast = [
    { time: "3 PM", type: "rain", amount: "0.1 in" },
    { time: "4 PM", type: "rain", amount: "0.3 in" },
    { time: "5 PM", type: "rain", amount: "0.2 in" },
    { time: "6 PM", type: "rain", amount: "0.1 in" },
    { time: "7 PM", type: "snow", amount: "0.5 in" },
  ];

  // Sample alerts data
  const sampleAlerts = [
    {
      title: "Severe Thunderstorm Warning",
      description: "Possible hail and strong winds expected in the area.",
      expirationTime: "8:00 PM",
    },
    {
      title: "Flash Flood Watch",
      description:
        "Heavy rainfall may lead to flash flooding in low-lying areas.",
      expirationTime: "10:00 PM",
    },
  ];

  // Sample AQI data
  const sampleAQI = {
    aqi: 42,
    description: "Good",
  };

  const sections = [
    {
      key: "main",
      component: MainWeatherDisplay,
      props: {
        city: "San Francisco",
        state: "CA",
        temperature: "72",
        condition: "Partly Cloudy",
        feelsLike: "70",
        highTemp: "75",
        lowTemp: "65",
        lastUpdated: "2:30 PM",
        sunrise: "6:42 AM",
        sunset: "7:23 PM",
      },
    },
    { key: "metrics", component: WeatherMetrics },
    {
      key: "aqi",
      component: AirQualityIndex,
      props: sampleAQI,
    },
    {
      key: "precipitation",
      component: PrecipitationForecast,
      props: { forecast: samplePrecipitationForecast },
    },
    {
      key: "alerts",
      component: WeatherAlerts,
      props: { alerts: sampleAlerts },
    }, // Add this line
    { key: "hourly", component: HourlyForecast },
    { key: "daily", component: DailyForecast },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.contentContainer}>
          <FlatList
            data={sections}
            renderItem={({ item }) => <WeatherSection {...item} />}
            keyExtractor={(item) => item.key}
            showsVerticalScrollIndicator={false}
            bounces={true}
            overScrollMode="always"
            decelerationRate="normal"
            contentContainerStyle={styles.flatListContent}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Add this
    borderColor: "pink",
    borderWidth: 2,
    padding: 16,
    width: screenWidth,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  contentContainer: {
    // backgroundColor: "pink",
    flex: 1,
    // padding: 16,
  },
  scrollView: {},
  flatListContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
});
