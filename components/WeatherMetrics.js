import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const { width } = Dimensions.get("window");

const MetricCard = ({ icon, value, unit, description }) => (
  <View style={styles.metricCard}>
    <Icon name={icon} size={24} color="#4287f5" />
    <Text style={styles.metricValue} numberOfLines={1}>
      {value}
    </Text>
    <Text style={styles.metricUnit} numberOfLines={1}>
      {unit}
    </Text>
    <Text style={styles.metricDescription} numberOfLines={1}>
      {description}
    </Text>
  </View>
);

const WeatherMetrics = () => {
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.heading}>Weather Metrics</Text>
      <View style={styles.container}>
        <MetricCard icon="wind" value="8.5" unit="mph" description="WSW" />
        <MetricCard
          icon="compass"
          value="1013"
          unit="hPa"
          description="Rising"
        />
        <MetricCard
          icon="droplet"
          value="45%"
          unit="Humidity"
          description="Normal"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    width: "100%",
    marginTop: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    paddingHorizontal: 10,
    color: "#333",
  },
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 10,
    marginHorizontal: -8, // Add this line to create space between cards
  },
  metricCard: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 12,
    alignItems: "center",
    width: width * 0.25, // Slightly less than a third to account for spacing
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: 8, // Add this line to create space between cards
  },
  metricValue: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 8,
  },
  metricUnit: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  metricDescription: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
});

export default WeatherMetrics;
