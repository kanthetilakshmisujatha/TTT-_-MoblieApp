import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

const mainVideo = {
  title: "స్టాలిన్ 4K రీ-రిలీజ్ ట్రైలర్ | మెగా మీడియా ఎంటర్‌టైన్‌మెంట్స్",
  channel: "మెగా మీడియా ఎంటర్‌టైన్‌మెంట్స్",
  views: "4 లక్షల వీక్షణలు",
  image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202502/prabhas-raju-uppalapati-254613141-16x9_0.jpeg?VersionId=Z65Y_tVW4zAW2.mUXxoKSJQxzWTvLEpW&size=690:388",
  videoId: "pRpeEdMmmQ0",
  timeAgo: "2 గంటల క్రితం",
  duration: "2:45",
  likes: "45K",
  comments: "2.3K"
};

const relatedVideos = [
  {
    id: "1",
    title: "ఖలేజా రీ-రిలీజ్ ట్రైలర్",
    views: "4.5 లక్షల వీక్షణలు",
    image: "https://connectmyindia.com/posts/images/2025/Khaleja-Re-Release-Date.jpg",
    videoId: "Ks-_Mh1QhMc",
    timeAgo: "1 గంట క్రితం",
    trending: true,
    duration: "3:15"
  },
  {
    id: "2",
    title: "అత్తారింటికి దారేది 4K ట్రైలర్",
    views: "3.8 లక్షల వీక్షణలు",
    image: "https://thetelugufilmnagar.com/storage/2023/04/Re-Release-Date-Announced.webp",
    videoId: "E7wJTI-1dvQ",
    timeAgo: "3 గంటల క్రితం",
    trending: true,
    duration: "2:30"
  },
  {
    id: "3",
    title: "బాహుబలి 4K రీమాస్టర్ ట్రైలర్",
    views: "5.2 లక్షల వీక్షణలు",
    image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/baahubali-the-beginning-et00016944-24-03-2017-18-31-40.jpg",
    videoId: "sOEg_5QsJ4Y",
    timeAgo: "5 గంటల క్రితం",
    duration: "4:10"
  },
];

const Trailer = () => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const openYouTubeVideo = (videoId) => {
    const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
    Linking.openURL(youtubeUrl).catch((err) => console.error("Couldn't open YouTube", err));
  };

  const PlayButton = ({ size = 50, withPulse = false }) => {
    return (
      <View style={styles.playButtonContainer}>
        {withPulse && <View style={[styles.pulseEffect, { width: size * 1.4, height: size * 1.4 }]} />}
        <View style={[
          styles.playButton,
          { width: size, height: size, borderRadius: size / 2 }
        ]}>
          <Ionicons name="play" size={size * 0.4} color="#fff" style={{ marginLeft: 2 }} />
        </View>
      </View>
    );
  };

  const TrendingBadge = () => (
    <View style={styles.trendingBadge}>
      <Ionicons name="flame" size={10} color="#fff" />
      <Text style={styles.trendingText}>TRENDING</Text>
    </View>
  );

  const TimeBadge = ({ time }) => (
    <View style={styles.timeBadge}>
      <Ionicons name="time-outline" size={9} color="#fff" />
      <Text style={styles.timeText}>{time}</Text>
    </View>
  );

  const DurationBadge = ({ duration }) => (
    <View style={styles.durationBadge}>
      <Text style={styles.durationText}>{duration}</Text>
    </View>
  );

  const ActionButton = ({ icon, count, onPress, active = false }) => (
    <TouchableOpacity style={styles.actionButton} onPress={onPress}>
      <Ionicons 
        name={icon} 
        size={20} 
        color={active ? "#FF6B9D" : "#fff"} 
      />
      {count && <Text style={styles.actionCount}>{count}</Text>}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <View style={styles.headerContent}>
            <View style={styles.headerLeft}>
              <View style={styles.iconWrapper}>
                <Ionicons name="play-circle" size={26} color="#FF6B9D" />
              </View>
              <View>
                <Text style={styles.headerTitle}>తాజా ట్రైలర్లు</Text>
                <Text style={styles.headerSubtitle}>Latest Movie Trailers</Text>
              </View>
            </View>
            <View style={styles.headerRight}>
              <TouchableOpacity style={styles.notificationButton}>
                <Ionicons name="notifications-outline" size={22} color="#FF6B9D" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.searchButton}>
                <Ionicons name="search" size={22} color="#FF6B9D" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Featured Video */}
        <View style={styles.featuredContainer}>
          <Text style={styles.featuredLabel}>ఫీచర్డ్ ట్రైలర్</Text>
          <TouchableOpacity
            style={styles.featuredCard}
            onPress={() => openYouTubeVideo(mainVideo.videoId)}
            activeOpacity={0.9}
          >
            <Image source={{ uri: mainVideo.image }} style={styles.featuredImage} />
            <View style={styles.featuredOverlay} />
            
            <View style={styles.playButtonWrapper}>
              <PlayButton size={60} withPulse={true} />
            </View>

            <DurationBadge duration={mainVideo.duration} />

            <View style={styles.topBadges}>
              <TimeBadge time={mainVideo.timeAgo} />
              <View style={styles.viewsBadge}>
                <Ionicons name="eye" size={10} color="#fff" />
                <Text style={styles.viewsBadgeText}>{mainVideo.views}</Text>
              </View>
            </View>

            <View style={styles.featuredContent}>
              <Text style={styles.featuredTitle} numberOfLines={2}>{mainVideo.title}</Text>
              <View style={styles.channelContainer}>
                <Ionicons name="videocam" size={12} color="#FF6B9D" />
                <Text style={styles.channelName}>{mainVideo.channel}</Text>
                <Ionicons name="checkmark-circle" size={12} color="#00FF00" />
              </View>
              
              <View style={styles.actionButtons}>
                <ActionButton 
                  icon={liked ? "heart" : "heart-outline"} 
                  count={mainVideo.likes}
                  onPress={() => setLiked(!liked)}
                  active={liked}
                />
                <ActionButton icon="chatbubble-outline" count={mainVideo.comments} />
                <ActionButton icon="share-social-outline" />
                <ActionButton 
                  icon={saved ? "bookmark" : "bookmark-outline"} 
                  onPress={() => setSaved(!saved)}
                  active={saved}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Hot Trailers */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleContainer}>
              <Ionicons name="flame" size={20} color="#FF6B9D" />
              <Text style={styles.sectionTitle}>హాట్ ట్రైలర్లు</Text>
            </View>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>అన్ని చూడండి</Text>
              <Ionicons name="chevron-forward" size={14} color="#FF6B9D" />
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
            {relatedVideos.map((video) => (
              <TouchableOpacity
                key={video.id}
                style={styles.horizontalCard}
                onPress={() => openYouTubeVideo(video.videoId)}
                activeOpacity={0.9}
              >
                {video.trending && <TrendingBadge />}
                <Image source={{ uri: video.image }} style={styles.horizontalCardImage} />
                <View style={styles.cardOverlay} />
                
                <DurationBadge duration={video.duration} />
                
                <View style={styles.horizontalContent}>
                  <View style={styles.horizontalHeader}>
                    <Text style={styles.horizontalTitle} numberOfLines={2}>{video.title}</Text>
                    <View style={styles.horizontalPlay}>
                      <PlayButton size={35} />
                    </View>
                  </View>
                  <View style={styles.horizontalFooter}>
                    <View style={styles.horizontalMeta}>
                      <View style={styles.metaItem}>
                        <Ionicons name="eye" size={10} color="#FF6B9D" />
                        <Text style={styles.metaText}>{video.views}</Text>
                      </View>
                      <TimeBadge time={video.timeAgo} />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Upcoming Trailers */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleContainer}>
              <Ionicons name="calendar" size={20} color="#FF6B9D" />
              <Text style={styles.sectionTitle}>రాబోయే ట్రైలర్లు</Text>
            </View>
          </View>

          <View style={styles.upcomingList}>
            {relatedVideos.slice(0, 2).map((video, index) => (
              <TouchableOpacity key={video.id} style={styles.upcomingCard}>
                <View style={styles.upcomingNumber}>
                  <Text style={styles.upcomingNumberText}>{index + 1}</Text>
                </View>
                <Image source={{ uri: video.image }} style={styles.upcomingImage} />
                <View style={styles.upcomingContent}>
                  <Text style={styles.upcomingTitle} numberOfLines={2}>{video.title}</Text>
                  <Text style={styles.upcomingTime}>24 గంటలలో</Text>
                </View>
                <Ionicons name="notifications-outline" size={20} color="#FF6B9D" />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#1a1a2e", // Deep Purple-Blue (ProfileScreen)
  },
  container: {
    flex: 1,
    backgroundColor: "#1a1a2e",
  },

  /* ---------- Header ---------- */
  headerContainer: {
    backgroundColor: "rgba(26, 26, 46, 0.95)",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 107, 157, 0.2)",
    elevation: 6,
    shadowColor: "#FF6B9D",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  headerContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  headerLeft: { flexDirection: "row", alignItems: "center" },
  iconWrapper: {
    backgroundColor: "rgba(255, 107, 157, 0.2)",
    padding: 10,
    borderRadius: 12,
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  headerSubtitle: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.8)",
    marginTop: 2,
  },
  headerRight: { flexDirection: "row", alignItems: "center" },
  notificationButton: { padding: 8, marginRight: 10 },
  searchButton: { padding: 8 },

  /* ---------- Featured ---------- */
  featuredContainer: { padding: 20, paddingTop: 10 },
  featuredLabel: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FF6B9D",
    marginBottom: 15,
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  featuredCard: {
    width: "100%",
    height: windowHeight * 0.4,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 12,
    shadowColor: "#FF6B9D",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  featuredImage: { width: "100%", height: "100%" },
  featuredOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(15, 52, 96, 0.5)",
  },
  playButtonContainer: { position: 'relative', alignItems: 'center', justifyContent: 'center' },
  pulseEffect: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 107, 157, 0.4)',
    borderRadius: 50,
  },
  playButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FF6B9D',
    elevation: 8,
    shadowColor: '#FF6B9D',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
  },
  playButtonWrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
    zIndex: 10,
  },
  durationBadge: {
    position: 'absolute',
    bottom: 80,
    right: 12,
    backgroundColor: 'rgba(0,0,0,0.8)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  durationText: { color: '#fff', fontSize: 12, fontWeight: '700' },
  topBadges: {
    position: "absolute",
    top: 12,
    left: 12,
    right: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 5,
  },
  viewsBadge: {
    backgroundColor: "rgba(0,0,0,0.7)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewsBadgeText: { color: "#fff", fontSize: 12, fontWeight: "600", marginLeft: 4 },
  featuredContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(15, 52, 96, 0.95)",
    padding: 16,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  featuredTitle: { color: "#fff", fontSize: 18, fontWeight: "700", marginBottom: 8, lineHeight: 22 },
  channelContainer: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  channelName: { color: "#FF6B9D", fontSize: 14, fontWeight: "600", marginLeft: 6, marginRight: 6, flex: 1 },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
  },
  actionButton: { alignItems: 'center', paddingHorizontal: 10 },
  actionCount: { color: '#fff', fontSize: 10, marginTop: 4, fontWeight: '600' },

  /* ---------- Section ---------- */
  section: { padding: 20, paddingTop: 10 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  sectionTitleContainer: { flexDirection: 'row', alignItems: 'center' },
  sectionTitle: { fontSize: 20, fontWeight: "800", color: "#fff", marginLeft: 8 },
  seeAllButton: { flexDirection: 'row', alignItems: 'center' },
  seeAllText: { color: "#FF6B9D", fontSize: 14, fontWeight: "600", marginRight: 4 },

  /* ---------- Horizontal Scroll ---------- */
  horizontalScroll: { paddingRight: 20 },
  horizontalCard: {
    width: windowWidth * 0.7,
    height: windowHeight * 0.25,
    borderRadius: 16,
    overflow: "hidden",
    marginRight: 15,
    elevation: 6,
    position: 'relative',
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  horizontalCardImage: { width: "100%", height: "100%" },
  cardOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(15, 52, 96, 0.4)",
  },
  horizontalContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(15, 52, 96, 0.9)",
    padding: 12,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  horizontalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 },
  horizontalTitle: { color: "#fff", fontSize: 16, fontWeight: "700", flex: 1, marginRight: 10, lineHeight: 20 },
  horizontalPlay: { position: 'absolute', top: -25, right: 5 },
  horizontalFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  horizontalMeta: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  metaItem: { flexDirection: 'row', alignItems: 'center', marginRight: 10 },
  metaText: { color: "#FF6B9D", fontSize: 12, marginLeft: 4 },

  /* ---------- Upcoming Trailers ---------- */
  upcomingList: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    padding: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  upcomingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  upcomingNumber: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FF6B9D',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  upcomingNumberText: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
  upcomingImage: { width: 60, height: 40, borderRadius: 8, marginRight: 12 },
  upcomingContent: { flex: 1 },
  upcomingTitle: { color: '#fff', fontSize: 14, fontWeight: '600', marginBottom: 4 },
  upcomingTime: { color: '#FF6B9D', fontSize: 12 },

  /* ---------- Badges ---------- */
  trendingBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#FF6B9D',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 5,
  },
  trendingText: { color: "#fff", fontSize: 10, fontWeight: "700", marginLeft: 4 },
  timeBadge: {
    backgroundColor: "#FF6B9D",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: { color: "#fff", fontSize: 10, fontWeight: "600", marginLeft: 4 },

  bottomPadding: { height: 30 },
});

export default Trailer;