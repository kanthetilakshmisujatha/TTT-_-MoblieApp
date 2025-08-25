import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, Linking } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const mainVideo = {
  title: "STALIN 4K Re-Release Trailer | Mega Media Entertainments",
  channel: "Mega Media Entertainments",
  views: "400K views",
  image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202502/prabhas-raju-uppalapati-254613141-16x9_0.jpeg?VersionId=Z65Y_tVW4zAW2.mUXxoKSJQxzWTvLEpW&size=690:388",
  videoId: "dQw4w9WgXcQ" // Example YouTube video ID
};

const relatedVideos = [
  { id: "1", title: "TRAILER TEA SER", views: "450K views", image: "https://connectmyindia.com/posts/images/2025/Khaleja-Re-Release-Date.jpg" },
  { id: "2", title: "TRAILER TEA SER", views: "45.4K views", image: "https://thetelugufilmnagar.com/storage/2023/04/Re-Release-Date-Announced.webp" },
  { id: "3", title: "TRAILER TEA SER", views: "50.6K views", image: "https://connectmyindia.com/posts/images/2025/Khaleja-Re-Release-Date.jpg" },
  { id: "4", title: "TRAILER TEA SER", views: "60.5K views", image: "https://thetelugufilmnagar.com/storage/2023/04/Re-Release-Date-Announced.webp" },
  { id: "5", title: "TRAILER TEA SER", views: "80.0K views", image: "https://connectmyindia.com/posts/images/2025/Khaleja-Re-Release-Date.jpg" },
];

const Trailer = () => {
  const [hovered, setHovered] = useState(null);

  const openYouTubeVideo = (videoId) => {
    const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
    Linking.openURL(youtubeUrl).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <View style={styles.container}>
      {/* ===== Header Section with Dot + Line ===== */}
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>New Trailers</Text>
        <View style={styles.dot} />
        <View style={styles.line} />
      </View>

      {/* Static Main Video Section */}
      <View style={styles.mainVideoContainer}>
        <TouchableOpacity 
          style={styles.videoThumbnailContainer}
          onPress={() => openYouTubeVideo(mainVideo.videoId)}
        >
          <Image
            source={{ uri: mainVideo.image }}
            style={styles.mainVideo}
            onError={(e) => console.log("Main video image failed to load", e)}
          />
          <View style={styles.playButtonContainer}>
            <Ionicons name="play-circle" size={64} color="rgba(255, 255, 255, 0.9)" />
          </View>
        </TouchableOpacity>
        <Text style={styles.mainVideoTitle}>{mainVideo.title}</Text>
        <Text style={styles.mainVideoChannel}>{mainVideo.channel}</Text>
        <Text style={styles.viewsText}>{mainVideo.views}</Text>
      </View>

      {/* Scrollable Section for Related Videos */}
      <ScrollView style={styles.scrollableSection} contentContainerStyle={styles.contentContainer}>
        <View style={styles.relatedVideosSection}>
          <Text style={styles.sectionTitle}>Up Next</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.relatedScroll}
          >
            {relatedVideos.map((video) => (
              <TouchableOpacity
                key={video.id}
                style={[styles.relatedVideoCard, hovered === video.id && styles.hoverEffect]}
                onPressIn={() => setHovered(video.id)}
                onPressOut={() => setHovered(null)}
                onPress={() => openYouTubeVideo(mainVideo.videoId)}
              >
                <Image
                  source={{ uri: video.image }}
                  style={styles.relatedVideoImage}
                  onError={(e) => console.log("Related video image failed to load", e)}
                />
                <View style={styles.relatedVideoInfo}>
                  <Text style={styles.relatedVideoTitle} numberOfLines={2}>{video.title}</Text>
                  <Text style={styles.relatedVideoViews}>{video.views}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Trailer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },

  /* ===== Heading with Dot + Line ===== */
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#2f6fff", // 🔵 blue dot
    marginLeft: 8,
  },
  line: {
    flex: 1,
    height: 1.5,
    backgroundColor: "#e9eefc", // 💖 pink line (change color if needed)
    marginLeft: 8,
  },

  mainVideoContainer: {
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  videoThumbnailContainer: {
    position: 'relative',
  },
  mainVideo: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    backgroundColor: "#000",
  },
  playButtonContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainVideoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginTop: 10,
  },
  mainVideoChannel: {
    fontSize: 14,
    color: "#606060",
    marginTop: 5,
  },
  viewsText: {
    fontSize: 12,
    color: "#606060",
    marginTop: 2,
  },
  scrollableSection: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  relatedVideosSection: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  relatedScroll: {
    paddingVertical: 5,
  },
  relatedVideoCard: {
    width: 150,
    marginRight: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  relatedVideoImage: {
    width: "100%",
    height: 100,
  },
  relatedVideoInfo: {
    padding: 8,
  },
  relatedVideoTitle: {
    fontSize: 12,
    fontWeight: "500",
    color: "#000",
  },
  relatedVideoViews: {
    fontSize: 10,
    color: "#606060",
    marginTop: 2,
  },
  hoverEffect: {
    backgroundColor: "#f0f0f0",
  },
});