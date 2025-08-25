import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Footer = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../assests/ttt.jpg")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Top Menu Links */}
      <View style={styles.menuRow}>
        <TouchableOpacity>
          <Text style={styles.menuText}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}>Advertise With Us</Text>
        </TouchableOpacity>
      </View>

      {/* Copyright */}
      <Text style={styles.copyText}>
        Copyright © 2025 All Rights Reserved by{" "}
        <Text style={styles.highlight}>Eagle Eye Technologies.</Text>
      </Text>

      {/* Social Icons */}
      <View style={styles.iconRow}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => Linking.openURL("https://facebook.com")}
        >
          <FontAwesome name="facebook" size={26} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => Linking.openURL("https://youtube.com")}
        >
          <FontAwesome name="youtube-play" size={26} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => Linking.openURL("https://x.com")}
        >
          <FontAwesome name="times" size={26} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => Linking.openURL("https://instagram.com")}
        >
          <FontAwesome name="instagram" size={26} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    paddingVertical: 20,
    paddingHorizontal: 12,
    alignItems: "center", // centers horizontally
  },
  logo: {
    width: 160,
    height: 60,
    marginBottom: 12,
  },
  menuRow: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: 14,
  },
  menuText: {
    fontSize: 10,
    color: "#fff",
    marginHorizontal: 8,
    marginVertical: 4,
  },
  copyText: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center",
    marginBottom: 12,
  },
  highlight: {
    color: "orange",
    fontWeight: "600",
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
  },
  iconButton: {
    marginHorizontal: 10, // 👈 space between icons
  },
});
