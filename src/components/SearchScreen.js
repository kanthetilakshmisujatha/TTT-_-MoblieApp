import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, Animated } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchScreen = ({ language }) => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const scaleAnim = useRef(new Animated.Value(1)).current; // Animation value for scaling

  // Animation for initial illustration
  useEffect(() => {
    const animate = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scaleAnim, {
            toValue: 1.05,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };
    animate();
  }, [scaleAnim]);

  const handleSearch = () => {
    if (searchText.trim()) {
      // Simulate search logic (replace with actual search logic if needed)
      setSearchResults([]); // Assume no results for demo
      alert(`Searching for "${searchText}"`);
    } else {
      alert(language === "telugu" ? "దయచేసి శోధన పదాన్ని నమోదు చేయండి!" : "Please enter a search query!");
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Search Bar with Background Image */}
      <View style={styles.searchContainer}>
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3" }} // Replace with your preferred background image
          style={styles.searchBackground}
        />
        <View style={styles.searchOverlay}>
          <TextInput
            style={styles.searchInput}
            placeholder={language === "telugu" ? "శోధించండి..." : "Search..."}
            placeholderTextColor="#ccc"
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity onPress={handleSearch} style={styles.searchBtn}>
            <FontAwesome name="search" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Initial Illustration (shown when searchText is empty) */}
      {!searchText && (
        <View style={styles.noDataContainer}>
          <Animated.Image
            source={{ uri: "https://img.freepik.com/free-vector/search-concept-illustration_114360-143.jpg" }} // Initial search-themed illustration
            style={[styles.noDataImage, { transform: [{ scale: scaleAnim }] }]}
          />
          <Text style={styles.noDataText}>
            {language === "telugu" ? "శోధన ప్రారంభించండి" : "Start Your Search"}
          </Text>
        </View>
      )}

      {/* No Data Found Illustration (shown after search with no results) */}
      {searchText && searchResults.length === 0 && (
        <View style={styles.noDataContainer}>
          <Image
            source={{ uri: "https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg" }} // No Data Found illustration
            style={styles.noDataImage}
          />
          <Text style={styles.noDataText}>
            {language === "telugu" ? "డేటా కనుగొనబడలేదు" : "No Data Found"}
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    height: 200,
    position: "relative",
  },
  searchBackground: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  searchOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 25,
    fontSize: 16,
    marginRight: 10,
  },
  searchBtn: {
    backgroundColor: "#e26512ff",
    padding: 12,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  noDataContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  noDataImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  noDataText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#666",
    textAlign: "center",
  },
});

export default SearchScreen;