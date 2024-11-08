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
import UvIndex from "./components/UvIndex";
import WindForecast from "./components/WindForecast";
import PollenCount from "./components/PollenCount";
import Astronomy from "./components/Astronomy";
import WeatherMap from "./components/WeatherMap"; 
import { useState } from "react";

const { width: screenWidth } = Dimensions.get("window");

const WeatherSection = ({ component: Component, ...props }) => (
  <Component {...props} />
);

export default function App() {
   const [currentLocation, setCurrentLocation] = useState("San Francisco, CA");

   const handleLocationChange = (newLocation) => {
     setCurrentLocation(newLocation);
     // Here you would typically fetch new weather data for the new location
     // For now, we'll just update the MainWeatherDisplay
     const updatedSections = sections.map((section) => {
       if (section.key === "main") {
         return {
           ...section,
           props: {
             ...section.props,
             city: newLocation,
             state: "", // You might want to parse the state from the newLocation string
           },
         };
       }
       return section;
     });
     setSections(updatedSections);
   };

  // Sample Weather Map data
  const sampleWeatherMapData = {
    region: {
      latitude: 29.8543,
      longitude: 77.888,
    },
    weatherData: [
      { latitude: 29.8543, longitude: 77.888, weight: 1 },
      { latitude: 29.855, longitude: 77.889, weight: 0.8 },
      { latitude: 29.854, longitude: 77.887, weight: 0.6 },
      { latitude: 29.856, longitude: 77.886, weight: 0.7 },
      { latitude: 29.853, longitude: 77.89, weight: 0.5 },
    ],
  };

  // Sample Astronomy data
  const sampleAstronomy = {
    moonPhase: "Waxing Crescent",
    moonrise: "3:45 PM",
    moonset: "2:30 AM",
    starVisibility: "Good",
  };

  // Sample Pollen Count data
  const samplePollenCount = {
    overall: 5.6,
    types: [
      { name: "Tree", count: 3.2 },
      { name: "Grass", count: 6.8 },
      { name: "Weed", count: 4.5 },
      { name: "Mold", count: 2.1 },
    ],
  };

  // Sample Wind Forecast data
  const sampleWindForecast = {
    currentWind: { speed: 10, direction: 225 },
    forecast: [
      { time: "12 PM", speed: 12, direction: 240 },
      { time: "1 PM", speed: 11, direction: 235 },
      { time: "2 PM", speed: 13, direction: 230 },
      { time: "3 PM", speed: 12, direction: 225 },
      { time: "4 PM", speed: 10, direction: 220 },
    ],
  };

  // Sample UV index data
  const sampleUvIndex = {
    currentUv: 6,
    forecast: [
      { time: "12 PM", uv: 5 },
      { time: "1 PM", uv: 6 },
      { time: "2 PM", uv: 7 },
      { time: "3 PM", uv: 6 },
      { time: "4 PM", uv: 5 },
    ],
  };

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
      key: "uvIndex",
      component: UvIndex,
      props: sampleUvIndex,
    },
    {
      key: "windForecast",
      component: WindForecast,
      props: sampleWindForecast,
    },
    {
      key: "pollenCount",
      component: PollenCount,
      props: samplePollenCount,
    },
    {
      key: "astronomy",
      component: Astronomy,
      props: sampleAstronomy,
    },
    {
      key: "weatherMap",
      component: WeatherMap,
      props: sampleWeatherMapData,
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
        <Header onLocationChange={handleLocationChange} />
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
