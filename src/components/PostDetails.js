import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function PostDetails({ route }) {
  // navigation నుండి వచ్చిన params తీసుకోవడం
  const { title, date, image, author } = route.params || {};

  return (
    <ScrollView style={styles.container}>
      {/* Website Logo */}
      

      {/* Title */}
      <Text style={styles.title}>{title || "No Title"}</Text>

      {/* Meta Info */}
      <View style={styles.metaRow}>
        <Text style={styles.meta}>By {author || "Admin"}</Text>
        <Text style={styles.meta}>{date || "Unknown Date"}</Text>
        <Text style={styles.meta}>0 REACTIONS</Text>
        <Text style={styles.meta}>0 COMMENTS</Text>
      </View>

      {/* Image */}
      {image && (
        <Image
          source={{ uri: image }}
          style={styles.image}
        />
      )}

      {/* Article Body */}
      <Text style={styles.body}>
        ఆంధ్రప్రదేశ్‌లోని పోలవరం ఇరిగేషన్ ప్రాజెక్టు మరొసారిగా వరదలతో సవాళ్లను ఎదుర్కొంటోంది.
        గోదావరి నదిలో వరద ప్రవాహం 8 లక్షల క్యూసెక్కులకుపైగా చేరుకోవడంతో, ఇప్పటికే
        బలహీనంగా మారిన ఎగువ కాఫర్‌డ్యామ్‌లో చీలకలు కనిపిస్తున్నాయి.
      </Text>

      <Text style={styles.body}>
        ప్రాజెక్టు నిర్మాణం పూర్తయ్యే వరకు నీటి మళ్లింపు నిర్వహణకు కీలకమైన ఈ డ్యామ్‌లో
        10 లక్షల క్యూసెక్కుల వరద ప్రవాహం వచ్చే అవకాశం ఉన్నట్లు ఇంజినీర్లు చెబుతున్నారు.
      </Text>

      {/* Reaction Section */}
      <View style={styles.reactionBox}>
        <Text style={styles.reactionTitle}>
          What is your reaction? <Text style={styles.vote}>0 votes</Text>
        </Text>
        <View style={styles.reactionRow}>
          <Text style={styles.emoji}>😀{"\n"}Happy{"\n"}0%</Text>
          <Text style={styles.emoji}>🙂{"\n"}Normal{"\n"}0%</Text>
          <Text style={styles.emoji}>😌{"\n"}Amused{"\n"}0%</Text>
          <Text style={styles.emoji}>😂{"\n"}Funny{"\n"}0%</Text>
          <Text style={styles.emoji}>😡{"\n"}Angry{"\n"}0%</Text>
        </View>
        <Text style={[styles.emoji, { textAlign: "center", marginTop: 10 }]}>
          😢{"\n"}Sad{"\n"}0%
        </Text>
      </View>

      {/* Comments Section */}
      <Text style={styles.commentTitle}>Comments (0)</Text>
      <View style={styles.commentBox}>
        <TextInput placeholder="Write a comment..." style={styles.commentInput} />
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Tags */}
      <Text style={styles.subHeading}>Tags</Text>
      <View style={styles.tagsRow}>
        {["పోలవరం","పోలవరంసమస్యలు","గోదావరిసనీటి","కాఫర్‌డ్యామ్","వరదముప్పు","ఆంధ్రప్రదేశ్"].map((tag, i) => (
          <Text key={i} style={styles.tag}>{tag}</Text>
        ))}
      </View>

      {/* Follow Us */}
      <Text style={styles.subHeading}>Follow Us</Text>
      <View style={styles.socialRow}>
        <Text style={styles.social}><FontAwesome name="facebook" size={16} color="#1877f2" /> Facebook</Text>
        <Text style={styles.social}><FontAwesome name="instagram" size={16} color="#e1306c" /> Instagram</Text>
        <Text style={styles.social}><FontAwesome name="youtube-play" size={16} color="#ff0000" /> YouTube</Text>
        <Text style={styles.social}><FontAwesome name="twitter" size={16} color="#1da1f2" /> Twitter</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: "#fff",marginTop: 25  },

  title: { fontSize: 18, fontWeight: "bold", color: "#000", marginBottom: 10, lineHeight: 26 },
  metaRow: { flexDirection: "row", flexWrap: "wrap", marginBottom: 10 },
  meta: { fontSize: 12, color: "#555", marginRight: 10 },
  image: { width: "100%", height: 200, borderRadius: 8, marginBottom: 15 },
  body: { fontSize: 15, color: "#333", lineHeight: 24, marginBottom: 10 },
  reactionBox: { backgroundColor: "#aaf7ff", padding: 15, borderRadius: 10, marginVertical: 15 },
  reactionTitle: { fontSize: 14, fontWeight: "bold", marginBottom: 10 },
  vote: { fontSize: 12, color: "#444" },
  reactionRow: { flexDirection: "row", justifyContent: "space-between" },
  emoji: { fontSize: 14, textAlign: "center", marginHorizontal: 4 },
  commentTitle: { fontSize: 16, fontWeight: "bold", marginTop: 15, marginBottom: 8 },
  commentBox: { marginBottom: 15 },
  commentInput: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, marginBottom: 10 },
  loginBtn: { backgroundColor: "#007bff", padding: 10, borderRadius: 8, alignSelf: "flex-start" },
  loginText: { color: "#fff", fontWeight: "bold" },
  subHeading: { fontSize: 16, fontWeight: "bold", marginVertical: 10 },
  tagsRow: { flexDirection: "row", flexWrap: "wrap", marginBottom: 15 },
  tag: { backgroundColor: "#f1f1f1", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 8, marginRight: 6, marginBottom: 6, fontSize: 13 },
  socialRow: { flexDirection: "row", flexWrap: "wrap" },
  social: { backgroundColor: "#f9f9f9", padding: 8, borderRadius: 8, marginRight: 6, marginBottom: 6, fontSize: 14 },
});
