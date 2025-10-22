import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
  ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get('window');

const DATA = [
  {
    id: "1",
    category: "GOSSIPS",
    title: "దూమ్ 4 లో రామ్ చరణ్? – యష్ రాజ్ ఫిలిమ్స్ ఆఫర్ పై సోషల్ మీడియాలో చర్చలు",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1600&auto=format&fit=crop&q=60",
    views: "12.5K",
    trending: true,
    hot: true,
    time: "2 hrs ago"
  },
  {
    id: "2",
    category: "MOVIES",
    title: "నిజాం హక్కుల డీల్ వంశీకి ఆర్ధిక భారం అయ్యింది",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1600&auto=format&fit=crop&q=60",
    views: "8.2K",
    trending: false,
    hot: true,
    time: "4 hrs ago"
  },
  {
    id: "3",
    category: "EXCLUSIVE",
    title: "కొత్త సినిమాలో ప్రభాస్ హీరోయిన్ గా ఎవరు? - బిగ్ అనౌన్స్మెంట్ ఎక్స్పెక్టెడ్",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&auto=format&fit=crop&q=60",
    views: "15.7K",
    trending: true,
    hot: false,
    time: "1 hr ago"
  },
];

const Card = ({ item, index }) => {
  const [scaleAnim] = useState(new Animated.Value(0.9));
  const [translateYAnim] = useState(new Animated.Value(20));
  const [opacityAnim] = useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
        delay: index * 100,
      }),
      Animated.spring(translateYAnim, {
        toValue: 0,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
        delay: index * 100,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 500,
        delay: index * 100,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  return (
    <Animated.View style={[
      styles.cardWrap,
      { 
        transform: [{ scale: scaleAnim }, { translateY: translateYAnim }],
        opacity: opacityAnim
      }
    ]}>
      <TouchableOpacity activeOpacity={0.9}>
        {/* Premium Number Badge */}
        <View style={styles.premiumNumberBadge}>
          <View style={styles.numberGlow} />
          <Text style={styles.numberText}>{index + 1}</Text>
          <View style={styles.numberRing} />
        </View>

        {/* Main Card */}
        <View style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.cardImage} />
          
          {/* Gradient Overlay */}
          <LinearGradient
            colors={["transparent", "rgba(15, 52, 96, 0.7)", "rgba(15, 52, 96, 0.95)"]}
            style={styles.gradientOverlay}
          />
          
          {/* Top Badges Container */}
          <View style={styles.topBadgesContainer}>
            {/* Category Badge */}
            <View style={[
              styles.categoryTag,
              item.category === "EXCLUSIVE" && styles.exclusiveTag,
              item.category === "GOSSIPS" && styles.gossipTag
            ]}>
              <Text style={styles.categoryText}>{item.category}</Text>
            </View>

            {/* Hot/Trending Badges */}
            <View style={styles.statusBadges}>
              {item.trending && (
                <View style={styles.trendingBadge}>
                  <Ionicons name="trending-up" size={10} color="#fff" />
                  <Text style={styles.badgeText}>TRENDING</Text>
                </View>
              )}
              {item.hot && (
                <View style={styles.hotBadge}>
                  <Ionicons name="flame" size={10} color="#fff" />
                  <Text style={styles.badgeText}>HOT</Text>
                </View>
              )}
            </View>
          </View>

          {/* Bottom Content */}
          <View style={styles.bottomContent}>
            <View style={styles.textContent}>
              <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
              
              {/* Stats Row */}
              <View style={styles.statsRow}>
                <View style={styles.statItem}>
                  <Ionicons name="eye" size={14} color="#e94560" />
                  <Text style={styles.statText}>{item.views}</Text>
                </View>
                <View style={styles.statItem}>
                  <Ionicons name="time" size={12} color="#4ECDC4" />
                  <Text style={styles.statText}>{item.time}</Text>
                </View>
              </View>
            </View>

            {/* Interactive Button */}
            <TouchableOpacity style={styles.interactiveButton}>
              <View style={styles.buttonGlow} />
              <Ionicons name="play-circle" size={28} color="#e94560" />
              <Text style={styles.buttonText}>చూడండి</Text>
            </TouchableOpacity>
          </View>

          {/* Pulse Effect for Hot Items */}
          {item.hot && <View style={styles.pulseEffect} />}
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const MostView = ({ language = "telugu" }) => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filters = [
    { id: "ALL", label: language === "telugu" ? "అన్నీ" : "All" },
    { id: "TRENDING", label: language === "telugu" ? "ట్రెండింగ్" : "Trending" },
    { id: "HOT", label: language === "telugu" ? "హాట్" : "Hot" },
    { id: "EXCLUSIVE", label: language === "telugu" ? "ఎక్స్‌క్లూసివ్" : "Exclusive" }
  ];

  return (
    <LinearGradient
      colors={["#1a1a2e", "#16213e", "#0f3460"]}
      style={styles.container}
    >
      {/* Header with Filter */}
      <View style={styles.header}>
        <View style={styles.headerMain}>
          <View style={styles.headerTitleContainer}>
            <Ionicons name="trending-up" size={28} color="#e94560" />
            <Text style={styles.headerText}>
              {language === "telugu" ? "అత్యధిక వీక్షణలు" : "Most Viewed"}
            </Text>
          </View>
          <View style={styles.headerSubtitleContainer}>
            <View style={styles.dot} />
            <Text style={styles.headerSubtitle}>
              {language === "telugu" ? "తాజా ట్రెండింగ్ వార్తలు" : "Latest Trending News"}
            </Text>
            <View style={styles.dot} />
          </View>
        </View>

        {/* Filter Chips */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterContainer}
        >
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter.id}
              style={[
                styles.filterChip,
                activeFilter === filter.id && styles.activeFilterChip
              ]}
              onPress={() => setActiveFilter(filter.id)}
            >
              <Text style={[
                styles.filterText,
                activeFilter === filter.id && styles.activeFilterText
              ]}>
                {filter.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Cards List */}
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Card item={item} index={index} />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.floatingButton}>
        <Ionicons name="refresh" size={24} color="#fff" />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 15,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(233, 69, 96, 0.2)",
  },
  headerMain: {
    alignItems: 'center',
    marginBottom: 15,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "800",
    color: "#fff",
    marginLeft: 10,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  headerSubtitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.7)",
    marginHorizontal: 12,
    fontWeight: "600",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#e94560",
  },
  filterContainer: {
    paddingHorizontal: 5,
  },
  filterChip: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "rgba(233, 69, 96, 0.3)",
  },
  activeFilterChip: {
    backgroundColor: "#e94560",
    borderColor: "#e94560",
  },
  filterText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  activeFilterText: {
    color: "#fff",
    fontWeight: "700",
  },
  listContainer: {
    padding: 16,
    paddingBottom: 80,
  },
  separator: {
    height: 20,
  },
  cardWrap: {
    borderRadius: 25,
    overflow: "hidden",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    elevation: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(233, 69, 96, 0.2)",
  },
  card: {
    position: "relative",
    height: 280,
    borderRadius: 25,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  premiumNumberBadge: {
    position: 'absolute',
    top: 15,
    left: 15,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  numberGlow: {
    position: 'absolute',
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#e94560',
    opacity: 0.8,
  },
  numberText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '900',
    zIndex: 2,
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  numberRing: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#e94560',
    opacity: 0.6,
  },
  topBadgesContainer: {
    position: "absolute",
    top: 15,
    left: 70,
    right: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    zIndex: 5,
  },
  categoryTag: {
    backgroundColor: "rgba(233, 69, 96, 0.95)",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    elevation: 3,
  },
  exclusiveTag: {
    backgroundColor: "rgba(78, 205, 196, 0.95)",
  },
  gossipTag: {
    backgroundColor: "rgba(255, 193, 7, 0.95)",
  },
  categoryText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  statusBadges: {
    alignItems: 'flex-end',
  },
  trendingBadge: {
    backgroundColor: "rgba(233, 69, 96, 0.9)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  hotBadge: {
    backgroundColor: "rgba(255, 152, 0, 0.9)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeText: {
    color: "#fff",
    fontSize: 8,
    fontWeight: "700",
    marginLeft: 4,
  },
  bottomContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    zIndex: 2,
  },
  textContent: {
    flex: 1,
    marginRight: 15,
  },
  title: {
    fontSize: 16,
    lineHeight: 22,
    color: "#fff",
    fontWeight: "700",
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    marginBottom: 10,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  statText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
    marginLeft: 4,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  interactiveButton: {
    backgroundColor: "rgba(233, 69, 96, 0.2)",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: "rgba(233, 69, 96, 0.4)",
    minWidth: 80,
  },
  buttonGlow: {
    position: 'absolute',
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
    backgroundColor: 'rgba(233, 69, 96, 0.3)',
    borderRadius: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "700",
    marginTop: 2,
  },
  pulseEffect: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#e94560',
    shadowColor: '#e94560',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#e94560',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
});

export default MostView;