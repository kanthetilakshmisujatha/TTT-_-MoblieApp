import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const DATA = [
  {
    id: "1",
    category: "GOSSIPS",
    title: "దూమ్ 4 లో రామ్ చరణ్? – యష్ రాజ్ ఫిలిమ్స్ ఆఫర్ పై సోషల్ మీడియాలో చర్చలు",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1600&auto=format&fit=crop&q=60",
  },
  {
    id: "2",
    category: "MOVIES",
    title: "నిజాం హక్కుల డీల్ వంశీకి ఆర్ధిక భారం అయ్యింది",
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1600&auto=format&fit=crop&q=60",
  },
  {
    id: "3",
    category: "GOSSIPS",
    title: "దూమ్ 4 లో రామ్ చరణ్? – యష్ రాజ్ ఫిలిమ్స్ ఆఫర్ పై సోషల్ మీడియాలో చర్చలు",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1600&auto=format&fit=crop&q=60",
  },
  {
    id: "4",
    category: "MOVIES",
    title: "నిజాం హక్కుల డీల్ వంశీకి ఆర్ధిక భారం అయ్యింది",
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1600&auto=format&fit=crop&q=60",
  },
  
];

const Card = ({ item, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.cardWrap}>
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.cardImage} />
        <View style={styles.metaBox}>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const MostView = () => {
  return (
    <View style={styles.container}>
      {/* Section Header */}
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Most Viewed</Text>
        <View style={styles.dot} />
        <View style={styles.headerLine} />
      </View>

      <FlatList
        data={DATA}
        keyExtractor={(it) => it.id}
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card item={item} onPress={() => {}} />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 18 }} />}
      />
    </View>
  );
};

export default MostView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingTop: 6,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    marginTop: 4,
  },
  headerText: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#2f6fff",
    marginLeft: 8,
  },
  headerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#e9eefc",
    marginLeft: 10,
  },
  cardWrap: {
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  card: {
    borderRadius: 16,
    backgroundColor: "#fff",
  },
  cardImage: {
    width: "100%",
    height: 230,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  metaBox: {
    padding: 14,
  },
  category: {
    fontSize: 12,
    letterSpacing: 1.2,
    color: "#6a6b6e",
    marginBottom: 6,
    textTransform: "uppercase",
  },
  title: {
    fontSize: 18,
    lineHeight: 26,
    color: "#111",
    fontWeight: "600",
  },
});
