import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const MainWeatherDisplay = ({
  city = "San Francisco",
  state = "CA",
  temperature = "72",
  condition = "Partly Cloudy",
  feelsLike = "70",
  highTemp = "75",
  lowTemp = "65",
  lastUpdated = "2:30 PM",
  sunrise = "6:42 AM",
  sunset = "7:23 PM",
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cityText}>
        {city}, {state}
      </Text>

      <View style={styles.updateContainer}>
        <Text style={styles.updateText}>Updated {lastUpdated}</Text>
      </View>

      <View style={styles.weatherIconContainer}>
        <Icon name="cloud" size={48} color="#1d2939" />
      </View>

      <Text style={styles.temperatureText}>{temperature}°</Text>

      <Text style={styles.conditionText}>{condition}</Text>
      <Text style={styles.feelsLikeText}>Feels like {feelsLike}°</Text>

      <View style={styles.highLowContainer}>
        <Text style={styles.highLowText}>H: {highTemp}°</Text>
        <Text style={styles.highLowText}>L: {lowTemp}°</Text>
      </View>

      <View style={styles.sunTimesContainer}>
        <View style={styles.sunTimeItem}>
          <Text style={styles.sunTimeText}>☀️ {sunrise}</Text>
        </View>
        <View style={styles.sunTimeItem}>
          <Text style={styles.sunTimeText}>🌅 {sunset}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%", // Added to take full width
    padding: 20,
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
    borderRadius: 24,
    backgroundColor: "white",
    marginVertical: 10, // Changed from margin to marginVertical
  },
  cityText: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 8,
  },
  updateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  updateText: {
    color: "#666",
    fontSize: 16,
  },
  weatherIconContainer: {
    marginBottom: 20,
  },
  temperatureText: {
    fontSize: 72,
    fontWeight: "bold",
    marginBottom: 8,
  },
  conditionText: {
    fontSize: 20,
    color: "#666",
    marginBottom: 4,
  },
  feelsLikeText: {
    fontSize: 18,
    color: "#666",
    marginBottom: 16,
  },
  highLowContainer: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 20,
  },
  highLowText: {
    fontSize: 18,
    fontWeight: "500",
  },
  sunTimesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  sunTimeItem: {
    alignItems: "center",
  },
  sunTimeText: {
    fontSize: 16,
    color: "#666",
  },
});

export default MainWeatherDisplay;
