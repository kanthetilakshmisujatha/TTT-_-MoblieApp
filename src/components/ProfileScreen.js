import React, { useState } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  StyleSheet, 
  ScrollView, 
  Switch, 
  SafeAreaView,
  Dimensions,
  StatusBar
} from "react-native";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { width: screenWidth } = Dimensions.get('window');

const ProfileScreen = ({ language }) => {
  const [userData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Premium User",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  });

  const [favorites] = useState([
    { id: 1, title: language === "telugu" ? "క్రికెట్ హైలైట్స్" : "Cricket Highlights", icon: "trophy" },
    { id: 2, title: language === "telugu" ? "రాజకీయ సమాచారం" : "Political Updates", icon: "university" },
    { id: 3, title: language === "telugu" ? "సినిమా న్యూస్" : "Movie News", icon: "film" },
  ]);

  const [readingHistory] = useState([
    { id: 1, title: language === "telugu" ? "సినిమా రివ్యూ" : "Movie Review", time: "2 hours ago" },
    { id: 2, title: language === "telugu" ? "స్పోర్ట్స్ న్యూస్" : "Sports News", time: "1 day ago" },
    { id: 3, title: language === "telugu" ? "టెక్ అప్‌డేట్స్" : "Tech Updates", time: "3 days ago" },
  ]);

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const toggleNotifications = () => setNotificationsEnabled(!notificationsEnabled);
  const toggleDarkMode = () => setDarkModeEnabled(!darkModeEnabled);

  const handleLogout = () => {
    alert(language === "telugu" ? "లాగ్అవుట్ విజయవంతమైంది!" : "Successfully logged out!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={["#1a1a2e", "#16213e", "#0f3460"]}
        style={styles.gradientBackground}
      >
        <ScrollView 
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Profile Header */}
          <View style={styles.header}>
            <View style={styles.profilePicContainer}>
              <Image
                source={{ uri: userData.profilePic }}
                style={styles.profilePic}
              />
              <View style={styles.profilePicOverlay}>
                <Ionicons name="camera-outline" size={20} color="#fff" />
              </View>
            </View>
            
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{userData.name}</Text>
              <Text style={styles.userEmail}>{userData.email}</Text>
              <View style={styles.userRoleContainer}>
                <Text style={styles.userRole}>{userData.role}</Text>
                <View style={styles.premiumBadge}>
                  <MaterialIcons name="verified" size={14} color="#fff" />
                </View>
              </View>
            </View>
            
            <TouchableOpacity style={styles.editProfileBtn}>
              <FontAwesome name="edit" size={16} color="#e94560" />
              <Text style={styles.editText}>
                {language === "telugu" ? "ఎడిట్" : "Edit"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Account Settings */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>
                {language === "telugu" ? "అకౌంట్" : "Account"}
              </Text>
              <MaterialIcons name="account-circle" size={24} color="#e94560" />
            </View>

            <TouchableOpacity style={styles.settingItem}>
              <View style={styles.settingContent}>
                <FontAwesome name="user" size={20} color="#e94560" />
                <Text style={styles.settingLabel}>
                  {language === "telugu" ? "ప్రొఫైల్ ఎడిట్ చేయండి" : "Edit Profile"}
                </Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="#ccc" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingItem}>
              <View style={styles.settingContent}>
                <FontAwesome name="shield" size={20} color="#e94560" />
                <Text style={styles.settingLabel}>
                  {language === "telugu" ? "ప్రైవసీ & సెక్యూరిటీ" : "Privacy & Security"}
                </Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="#ccc" />
            </TouchableOpacity>
          </View>

          {/* Settings */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>
                {language === "telugu" ? "సెట్టింగ్స్" : "Settings"}
              </Text>
              <MaterialIcons name="settings" size={24} color="#e94560" />
            </View>

            <View style={styles.settingItem}>
              <View style={styles.settingContent}>
                <FontAwesome name="bell" size={20} color="#e94560" />
                <Text style={styles.settingLabel}>
                  {language === "telugu" ? "నోటిఫికేషన్స్" : "Notifications"}
                </Text>
              </View>
              <Switch
                trackColor={{ false: "#e0e0e0", true: "#e94560" }}
                onValueChange={toggleNotifications}
                value={notificationsEnabled}
              />
            </View>

            <View style={styles.settingItem}>
              <View style={styles.settingContent}>
                <FontAwesome name="moon-o" size={20} color="#e94560" />
                <Text style={styles.settingLabel}>
                  {language === "telugu" ? "డార్క్ మోడ్" : "Dark Mode"}
                </Text>
              </View>
              <Switch
                trackColor={{ false: "#e0e0e0", true: "#e94560" }}
                onValueChange={toggleDarkMode}
                value={darkModeEnabled}
              />
            </View>
          </View>

          {/* Favorites */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>
                {language === "telugu" ? "ఇష్టాలు" : "Favorites"}
              </Text>
              <MaterialIcons name="favorite" size={24} color="#e94560" />
            </View>

            {favorites.map((item) => (
              <TouchableOpacity key={item.id} style={styles.favItem}>
                <View style={styles.favContent}>
                  <FontAwesome name={item.icon} size={20} color="#e94560" style={styles.favIcon} />
                  <Text style={styles.favTitle}>{item.title}</Text>
                </View>
                <FontAwesome name="heart" size={18} color="#e94560" />
              </TouchableOpacity>
            ))}
          </View>

          {/* Reading History */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>
                {language === "telugu" ? "చదివిన చరిత్ర" : "Reading History"}
              </Text>
              <MaterialIcons name="history" size={24} color="#e94560" />
            </View>

            {readingHistory.map((item) => (
              <TouchableOpacity key={item.id} style={styles.historyItem}>
                <View style={styles.historyContent}>
                  <Text style={styles.historyTitle}>{item.title}</Text>
                  <Text style={styles.historyTime}>{item.time}</Text>
                </View>
                <MaterialIcons name="chevron-right" size={20} color="#ccc" />
              </TouchableOpacity>
            ))}
          </View>

          {/* Logout */}
          <TouchableOpacity 
            style={styles.logoutButton} 
            onPress={handleLogout}
          >
            <LinearGradient
              colors={["#e94560", "#e23e5a"]}
              style={styles.buttonGradient}
            >
              <FontAwesome name="sign-out" size={20} color="#fff" />
              <Text style={styles.logoutText}>
                {language === "telugu" ? "లాగ్అవుట్" : "Logout"}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  gradientBackground: { flex: 1 },
  scrollContent: { paddingBottom: 40, padding: 20 },
  header: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: 20,
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    width: screenWidth * 0.9,
    maxWidth: 400,
    alignSelf: "center",
  },
  profilePicContainer: { position: "relative", marginBottom: 15 },
  profilePic: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 4,
    borderColor: "#e94560",
  },
  profilePicOverlay: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#e94560",
    width: 35,
    height: 35,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#fff",
  },
  userInfo: { alignItems: "center", marginBottom: 15 },
  userName: { fontSize: 24, fontWeight: "800", color: "#fff", marginBottom: 5 },
  userEmail: { fontSize: 16, color: "#ccc", marginBottom: 8 },
  userRoleContainer: { flexDirection: "row", alignItems: "center" },
  userRole: { fontSize: 16, color: "#e94560", fontWeight: "700" },
  premiumBadge: { 
    backgroundColor: "#e94560", 
    marginLeft: 8, 
    paddingHorizontal: 8, 
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    height: 20,
  },
  editProfileBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e94560",
  },
  editText: { color: "#e94560", fontSize: 14, fontWeight: "600", marginLeft: 6 },
  section: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    marginBottom: 15,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    width: screenWidth * 0.9,
    maxWidth: 400,
    alignSelf: "center",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
    paddingBottom: 10,
  },
  sectionTitle: { fontSize: 20, fontWeight: "700", color: "#fff" },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.05)",
  },
  settingContent: { flexDirection: "row", alignItems: "center" },
  settingLabel: { fontSize: 16, color: "#fff", marginLeft: 12 },
  favItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.05)",
  },
  favContent: { flexDirection: "row", alignItems: "center" },
  favIcon: { marginRight: 12 },
  favTitle: { fontSize: 16, color: "#fff" },
  historyItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.05)",
  },
  historyTitle: { fontSize: 16, color: "#fff", marginBottom: 4 },
  historyTime: { fontSize: 13, color: "#ccc" },
  logoutButton: {
    borderRadius: 12,
    overflow: "hidden",
    width: screenWidth * 0.9,
    maxWidth: 400,
    alignSelf: "center",
  },
  buttonGradient: {
    flexDirection: "row",
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  logoutText: { color: "#fff", fontSize: 16, fontWeight: "700", marginLeft: 8 },
});

export default ProfileScreen;