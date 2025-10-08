import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ProfileScreen = ({ language }) => {
  // Simulate user login state (replace with actual auth logic)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    role: "",
    profilePic: "",
  });

  const handleGoogleSignIn = () => {
    // Simulate Google Sign-In (replace with actual Google Sign-In logic)
    setIsLoggedIn(true);
    setUserData({
      name: "John Doe",
      role: "User",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg", // Placeholder profile pic
    });
    alert(language === "telugu" ? "Googleతో లాగిన్ విజయవంతమైంది!" : "Successfully signed in with Google!");
  };

  const handleLogout = () => {
    // Simulate logout
    setIsLoggedIn(false);
    setUserData({ name: "", role: "", profilePic: "" });
    alert(language === "telugu" ? "లాగ్అవుట్ విజయవంతమైంది!" : "Successfully logged out!");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        {isLoggedIn ? (
          <>
            <Image
              source={{ uri: userData.profilePic || "https://via.placeholder.com/150" }}
              style={styles.profilePic}
            />
            <Text style={styles.userName}>{userData.name || "Unknown User"}</Text>
            <Text style={styles.userRole}>{userData.role || "No Role"}</Text>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <Text style={styles.buttonText}>
                {language === "telugu" ? "లాగ్అవుట్" : "Logout"}
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Image
              source={{ uri: "https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg" }} // Placeholder login illustration
              style={styles.loginIllustration}
            />
            <Text style={styles.loginPrompt}>
              {language === "telugu" ? "లాగిన్ చేయడానికి దయచేసి Googleతో కొనసాగండి" : "Please sign in to continue"}
            </Text>
            <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>
              <FontAwesome name="google" size={24} color="#fff" style={styles.googleIcon} />
              <Text style={styles.buttonText}>
                {language === "telugu" ? "Googleతో కొనసాగండి" : "Continue with Google"}
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  userRole: {
    fontSize: 18,
    color: "#666",
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: "#e26512ff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  googleButton: {
    backgroundColor: "#e26512ff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  googleIcon: {
    marginRight: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginIllustration: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  loginPrompt: {
    fontSize: 18,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
});

export default ProfileScreen;