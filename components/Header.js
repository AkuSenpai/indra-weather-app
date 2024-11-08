import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
} from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import Icon6 from "react-native-vector-icons/FontAwesome6";

const { width: screenWidth } = Dimensions.get("window");

const Header = ({ onLocationChange,toggleDrawer  }) => {
  const [appIsReady, setAppIsReady] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
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

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onLocationChange(searchQuery);
      setIsSearching(false);
      setSearchQuery("");
    }
  };

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.headerContainer} onLayout={onLayoutRootView}>
      {isSearching ? (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Enter location..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearch}
          />
          <TouchableOpacity onPress={() => setIsSearching(false)}>
            <Icon5 name="times" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <TouchableOpacity>
            <Icon5 name="bars" size={30} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>WEATHRY</Text>
          <TouchableOpacity onPress={() => setIsSearching(true)}>
            <Icon5 name="search" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleDrawer}>
            <Icon6 name="circle-user" size={30} color="#000" />
          </TouchableOpacity>
        </>
      )}
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
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});

export default Header;
