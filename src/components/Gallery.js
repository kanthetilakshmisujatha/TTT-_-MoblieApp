import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Gallery = () => {
  const data = [
    { id: '1', name: 'ప్రియాత్మ సుబ్బు', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToqF7V5qsZPEoEvXkfxhdGCD5pjJW2J3vWCQ&s' },
    { id: '2', name: 'తెలుగు హీరోయిన్', image: 'https://i.pinimg.com/736x/b7/56/64/b75664442aa0da7ae312a4443a11d07d.jpg' },
    { id: '3', name: 'కాయము హీరోయిన్', image: 'data:image/jpeg;base64,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' },
    { id: '4', name: 'ఓ డైరెక్టర్', image: 'https://igimage.indiaglitz.com/tamil/gallery/actress/tejuashwini/tejuashwiniposter210725.jpg' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>ACTRESS</Text>
      </View>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* ===== Gallery Heading with Dot + Line ===== */}
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Gallery</Text>
        <View style={styles.dot} />
        <View style={styles.line} />
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: { fontSize: 20, fontWeight: 'bold', color: '#000' },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#2f6fff', // 🔵 Blue dot
    marginLeft: 8,
  },
  line: {
    flex: 1,
    height: 1.5,
    backgroundColor: '#e9eefc', // ❤️ Pink line (ఇది నీకు కావాల్సిన రంగుకు మార్చుకోవచ్చు)
    marginLeft: 8,
  },
  seeAll: { color: '#000', fontSize: 16, marginLeft: 10 },

  list: { paddingBottom: 10 },
  row: { justifyContent: 'space-between' },

  card: {
    width: (width - 40) / 2,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: { width: '100%', height: 230 },
  labelContainer: {
    position: 'absolute',
    top: '80%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -5 }],
    backgroundColor: '#FF69B4',
    padding: 4,
    borderRadius: 5,
  },
  labelText: { color: '#fff', fontSize: 10, fontWeight: 'bold', textAlign: 'center', width: 50 },
  name: { color: '#ffffffff', textAlign: 'center', padding: 2, fontSize: 14, marginTop: -25 },
});

export default Gallery;
