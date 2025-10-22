import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const TopNav = ({ language, setLanguage }) => {
  const navigation = useNavigation();

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "telugu" ? "english" : "telugu"));
  };

  return (
    <View style={styles.topContainer}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <Image source={require("../assests/ttt.jpg")} style={styles.logo} />
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={toggleLanguage} 
          style={styles.toggleBtn}
          activeOpacity={0.8}
        >
          <MaterialIcons 
            name={language === "telugu" ? "translate" : "language"} 
            size={20} 
            color="#fff" 
            style={styles.toggleIcon}
          />
          <Text style={styles.toggleText}>
            {language === "telugu" ? "English" : "తెలుగు"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const MoreScreen = ({ language }) => {
  const navigation = useNavigation();
  const [hoveredCard, setHoveredCard] = useState(null);

  const menuItems = [
    {
      key: "politics",
      path: "Politics",
      nameTel: "రాజకీయం",
      nameEn: "Politics",
      image: require("../assests/policts.webp"),
      icon: "gavel"
    },
    {
      key: "movies",
      path: "Movies", 
      nameTel: "సినిమా",
      nameEn: "Movies",
      image: require("../assests/movie.jpg"),
      icon: "movie"
    },
    {
      key: "gossips",
      path: "Gossips",
      nameTel: "గాసిప్స్",
      nameEn: "Gossips", 
      image: require("../assests/gossips.avif"),
      icon: "chat"
    },
    {
      key: "reviews",
      path: "Reviews",
      nameTel: "రివ్యూస్",
      nameEn: "Reviews",
      image: require("../assests/revie.png"),
      icon: "rate-review"
    },
    {
      key: "gallery", 
      path: "Gallery",
      nameTel: "గ్యాలరీ",
      nameEn: "Gallery",
      image: require("../assests/gallery.webp"),
      icon: "photo-library"
    },
    {
      key: "videos",
      path: "Videos",
      nameTel: "వీడియోలు",
      nameEn: "Videos",
      image: require("../assests/videos.jpg"),
      icon: "video-collection"
    },
    {
      key: "ott",
      path: "OTT",
      nameTel: "ఓటిటి",
      nameEn: "OTT",
      image: require("../assests/ott.jpg"),
      icon: "live-tv"
    },
    {
      key: "sports",
      path: "Sports",
      nameTel: "క్రీడలు", 
      nameEn: "Sports",
      image: require("../assests/sports.jpg"),
      icon: "sports"
    }
  ];

  return (
    <ScrollView style={styles.moreScreenContainer}>
      <View style={styles.cardsContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(item.path)}
            style={[
              styles.card,
              hoveredCard === item.key && styles.cardHovered
            ]}
            activeOpacity={0.7}
            onPressIn={() => setHoveredCard(item.key)}
            onPressOut={() => setHoveredCard(null)}
          >
            <Image source={item.image} style={styles.cardImage} />
            <View style={[
              styles.overlay,
              hoveredCard === item.key && styles.overlayHovered
            ]} />
            <View style={styles.cardContent}>
              <View style={styles.iconContainer}>
                <MaterialIcons 
                  name={item.icon} 
                  size={28} 
                  color="#fff"
                  style={styles.cardIcon}
                />
              </View>
              <Text style={styles.cardTitle}>
                {language === "telugu" ? item.nameTel : item.nameEn}
              </Text>
              <View style={styles.cardDivider} />
              <View style={styles.subtitleContainer}>
                <Text style={styles.cardSubtitle}>
                  {language === "telugu" ? "మరిన్ని చూడండి" : "View More"}
                </Text>
                <MaterialIcons 
                  name="arrow-forward" 
                  size={16} 
                  color="#e94560" 
                  style={styles.arrowIcon}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const BottomNav = ({ language }) => {
  const navigation = useNavigation();
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [activeIcon, setActiveIcon] = useState(null);

  const getRouteByLabel = (label) => {
    if (label === "హోమ్" || label === "Home") return "Main";
    if (label === "మరిన్ని" || label === "More") return "More";
    if (label === "శోధన" || label === "Search") return "Search";
    if (label === "ప్రొఫైల్" || label === "Profile") return "Profile";
    return "Main";
  };

  const bottomItems = [
    { icon: "home", label: language === "telugu" ? "హోమ్" : "Home" },
    { icon: "category", label: language === "telugu" ? "మరిన్ని" : "More" },
    { icon: "search", label: language === "telugu" ? "శోధన" : "Search" },
    { icon: "person", label: language === "telugu" ? "ప్రొఫైల్" : "Profile" }
  ];

  const handleIconPress = (index, label) => {
    setActiveIcon(index === 0 && activeIcon !== 0 ? 0 : null);
    navigation.navigate(getRouteByLabel(label));
  };

  return (
    <View style={styles.bottomContainer}>
      <View style={styles.bottomBar}>
        {bottomItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.iconBtn,
              hoveredIcon === index && styles.iconBtnHovered
            ]}
            onPressIn={() => setHoveredIcon(index)}
            onPressOut={() => setHoveredIcon(null)}
            onPress={() => handleIconPress(index, item.label)}
          >
            <MaterialIcons 
              name={item.icon} 
              size={22} 
              color={index === 0 && activeIcon === 0 ? "#e94560" : "#000"} 
            />
            <Text style={styles.iconLabel}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "ios" ? 30 : 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 8,
  },
  logo: { 
    width: 150, 
    height: 60, 
    resizeMode: "contain",
    marginBottom: 10,
  },
  toggleBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e94560",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    elevation: 3,
  },
  toggleIcon: {
    marginRight: 6,
  },
  toggleText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  moreScreenContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 16,
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    aspectRatio: 1,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    backgroundColor: "#fff",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  cardHovered: {
    transform: [{ scale: 1.03 }],
    elevation: 12,
    shadowOpacity: 0.4,
    shadowRadius: 8,
    borderColor: "#e94560",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  overlayHovered: {
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  cardContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  iconContainer: {
    backgroundColor: "rgba(233, 69, 96, 0.2)",
    borderRadius: 20,
    padding: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
  },
  cardIcon: {
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#fff",
    textAlign: "center",
    marginBottom: 8,
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 8,
    letterSpacing: 0.5,
  },
  cardDivider: {
    width: 40,
    height: 3,
    backgroundColor: "#e94560",
    marginVertical: 6,
    borderRadius: 2,
  },
  subtitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#e94560",
    fontWeight: "700",
    marginRight: 4,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: {width: 0.5, height: 0.5},
    textShadowRadius: 2,
  },
  arrowIcon: {
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: {width: 0.5, height: 0.5},
    textShadowRadius: 2,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    elevation: 8,
  },
  bottomBar: {
    flexDirection: "row",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  iconBtn: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
  },
  iconBtnHovered: {
    transform: [{ scale: 1.05 }],
    opacity: 0.95,
    backgroundColor: "rgba(233, 69, 96, 0.1)",
    borderRadius: 50,
    padding: 10,
  },
  iconLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
    fontWeight: "500",
  },
});

export { TopNav, BottomNav, MoreScreen };