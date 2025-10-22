import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get('window');

// Bilingual Support
const getText = (lang) => ({
  sectionTitle: lang === "telugu" ? "మూవీ రివ్యూలు" : "Movie Reviews",
  sectionSubtitle: lang === "telugu" ? "తాజా రివ్యూలు" : "Latest Reviews",
  seeAll: lang === "telugu" ? "అన్ని చూడండి" : "See All",
  trending: lang === "telugu" ? "ట్రెండింగ్" : "TRENDING",
});

const REVIEWS = [
  {
    id: "1",
    title: "స్టాలిన్ మూవీ రివ్యూ: ప్రభాస్ అద్భుత నటన, విజయ్ దేవరకొండ దర్శకత్వం మాస్టర్పీస్",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=250&fit=crop",
    rating: 4.5,
    views: "2.5K",
    comments: "128",
    time: "3 hours ago",
    trending: true
  },
  {
    id: "2",
    title: "ఖలేజా రీరిలీజ్ రివ్యూ: మహేష్ బాబు సూపర్ హిట్ మూవీ 4K లో అద్భుతంగా",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&h=250&fit=crop",
    rating: 4.8,
    views: "3.2K",
    comments: "256",
    time: "5 hours ago",
    trending: true
  },
  {
    id: "3",
    title: "అత్తారింటికి దారేది రివ్యూ: చిరంజీవి మాస్ ఎంటర్టైనర్",
    image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=400&h=250&fit=crop",
    rating: 4.2,
    views: "1.8K",
    comments: "89",
    time: "1 day ago",
    trending: false
  },
  {
    id: "4",
    title: "బాహుబలి 4K రీమాస్టర్ రివ్యూ: ఎపిక్ సినిమా కొత్త రూపంలో",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    rating: 4.9,
    views: "4.1K",
    comments: "312",
    time: "2 days ago",
    trending: true
  },
];

const StarRating = ({ rating }) => (
  <View style={styles.starContainer}>
    {[1, 2, 3, 4, 5].map((star) => (
      <Ionicons
        key={star}
        name={star <= rating ? "star" : star <= rating + 0.5 ? "star-half" : "star-outline"}
        size={16}
        color="#FFD700"
        style={styles.star}
      />
    ))}
    <Text style={styles.ratingText}>{rating}</Text>
  </View>
);

const ReviewCard = ({ item }) => (
  <TouchableOpacity activeOpacity={0.9} style={styles.reviewCard}>
    {/* Trending Badge */}
    {item.trending && (
      <View style={styles.trendingBadge}>
        <Ionicons name="flame" size={12} color="#fff" />
        <Text style={styles.trendingText}>TRENDING</Text>
      </View>
    )}
    
    <Image source={{ uri: item.image }} style={styles.reviewImage} />
    <View style={styles.imageOverlay} />
    
    {/* Play Button */}
    <View style={styles.playButton}>
      <View style={styles.playButtonInner}>
        <Ionicons name="play" size={20} color="#fff" />
      </View>
    </View>

    {/* Content */}
    <View style={styles.cardContent}>
      <View style={styles.headerRow}>
        <StarRating rating={item.rating} />
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
      
      <Text style={styles.reviewTitle} numberOfLines={2}>
        {item.title}
      </Text>
      
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <View style={styles.statIconContainer}>
            <Ionicons name="eye" size={14} color="#e94560" />
          </View>
          <Text style={styles.statText}>{item.views}</Text>
        </View>
        
        <View style={styles.statItem}>
          <View style={styles.statIconContainer}>
            <MaterialIcons name="comment" size={14} color="#4ECDC4" />
          </View>
          <Text style={styles.statText}>{item.comments}</Text>
        </View>
        
        <TouchableOpacity style={styles.shareButton}>
          <Ionicons name="share-outline" size={16} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>

    {/* Card Glow Effect */}
    <View style={styles.cardGlow} />
  </TouchableOpacity>
);

const ReviewsSection = ({ language = "telugu" }) => {
  const texts = getText(language);

  return (
    <LinearGradient
      colors={["#1a1a2e", "#16213e", "#0f3460"]}
      style={styles.container}
    >
      {/* Section Header */}
      <View style={styles.sectionHeader}>
        <View style={styles.headerMain}>
          <View style={styles.headerIconContainer}>
            <Ionicons name="star" size={28} color="#e94560" />
          </View>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>{texts.sectionTitle}</Text>
            <Text style={styles.headerSubtitle}>{texts.sectionSubtitle}</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>{texts.seeAll}</Text>
          <MaterialIcons name="arrow-forward-ios" size={14} color="#e94560" />
        </TouchableOpacity>
      </View>

      {/* Horizontal Scroll of Reviews */}
      <FlatList
        data={REVIEWS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ReviewCard item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        snapToInterval={width * 0.75 + 20}
        decelerationRate="fast"
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    paddingHorizontal: 0,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
    paddingHorizontal: 20,
  },
  headerMain: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerIconContainer: {
    backgroundColor: "rgba(233, 69, 96, 0.2)",
    padding: 12,
    borderRadius: 16,
    marginRight: 15,
  },
  headerTextContainer: {
    flexDirection: "column",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#fff",
    marginBottom: 2,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  headerSubtitle: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.7)",
    fontWeight: "600",
  },
  seeAllButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(233, 69, 96, 0.15)",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(233, 69, 96, 0.4)",
  },
  seeAllText: {
    fontSize: 14,
    color: "#e94560",
    fontWeight: "700",
    marginRight: 6,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingRight: 40,
  },
  separator: {
    width: 15,
  },
  reviewCard: {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: 20,
    width: width * 0.75,
    overflow: "hidden",
    elevation: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(233, 69, 96, 0.2)",
    position: 'relative',
  },
  trendingBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: "#e94560",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10,
    elevation: 5,
  },
  trendingText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "800",
    marginLeft: 4,
  },
  reviewImage: {
    width: "100%",
    height: 160,
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  playButton: {
    position: 'absolute',
    top: '35%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
    zIndex: 5,
  },
  playButtonInner: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(233, 69, 96, 0.95)',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#e94560',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
  },
  cardContent: {
    padding: 18,
    backgroundColor: "rgba(26, 26, 46, 0.95)",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    marginRight: 2,
  },
  ratingText: {
    fontSize: 14,
    color: "#FFD700",
    fontWeight: "800",
    marginLeft: 8,
    backgroundColor: 'rgba(255, 215, 0, 0.15)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  timeText: {
    fontSize: 11,
    color: "rgba(255, 255, 255, 0.7)",
    fontWeight: "600",
  },
  reviewTitle: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "700",
    lineHeight: 22,
    marginBottom: 15,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  statIconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 6,
    borderRadius: 8,
    marginRight: 6,
  },
  statText: {
    fontSize: 13,
    color: "#fff",
    fontWeight: "700",
  },
  shareButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(233, 69, 96, 0.9)",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  cardGlow: {
    position: 'absolute',
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
    backgroundColor: 'rgba(233, 69, 96, 0.15)',
    borderRadius: 15,
    zIndex: -1,
  },
});

export default ReviewsSection;