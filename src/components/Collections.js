import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const Collections = () => {
  const [activeTab, setActiveTab] = useState('Movies');
  const [activeCollectionTab, setActiveCollectionTab] = useState('1st day TS&AP');

  const movieData = [
    { name: 'మా రాజు', releaseDate: 'Aug 1, 2025' },
    { name: 'సూర్య', releaseDate: 'Aug 14, 2025' },
    { name: 'నర్ 2', releaseDate: 'Aug 14, 2025' },
    { name: 'అలోడు 2 - శౌర్యం', releaseDate: 'Sept 25, 2025' },
    { name: 'ఓ నగరానికి', releaseDate: 'May 26, 2026' },
    { name: 'Squid Game S3', releaseDate: '27 Jun 2025' },
  ];

  const collectionData = {
    '1st day TS&AP': [
      { name: 'పోరు పోరి ఎర మొను', releaseDate: '₹ 105 Cr' },
      { name: 'ముంపైవేరు నర్సింహా (బెలుగు)', releaseDate: '₹ 5 Cr' },
      { name: 'జన్మగుండు', releaseDate: '₹ 10.1 Cr' },
    ],
    '1st day WW': [],
    'Closing WW': [],
  };

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.releaseDate}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* ===== Movie Schedules Heading ===== */}
          <View style={styles.headerRow}>
        <Text style={styles.header}>సినిమా షెడ్యూల్స్</Text>
        <View style={styles.dot} />
        <View style={styles.line} />
      </View>

      {/* Movie Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Movies' && styles.activeTab]}
          onPress={() => setActiveTab('Movies')}>
          <Text style={[styles.tabText, activeTab === 'Movies' ? styles.activeTabText : styles.inactiveTabText]}>సినిమాలు</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'OTT' && styles.activeTab]}
          onPress={() => setActiveTab('OTT')}>
          <Text style={[styles.tabText, activeTab === 'OTT' ? styles.activeTabText : styles.inactiveTabText]}>ఓటీటీ</Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'Movies' && (
        <FlatList
          // ...existing code...
          ListHeaderComponent={
            <View style={styles.row}>
              <Text style={styles.headerText}>పేరు</Text>
              <Text style={styles.headerText}>విడుదల తేదీ</Text>
            </View>
          }
        />
      )}

   {/* Movie Collections Section */}
      <View style={styles.headerRow}>
        <Text style={styles.header}>సినిమా కలెక్షన్స్</Text>
        <View style={styles.dot} />
        <View style={styles.line} />
      </View>
  {/* Collections Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeCollectionTab === '1st day TS&AP' && styles.activeTab]}
          onPress={() => setActiveCollectionTab('1st day TS&AP')}>
          <Text style={[styles.tabText, activeCollectionTab === '1st day TS&AP' ? styles.activeTabText : styles.inactiveTabText]}>మొదటి రోజు తెలంగాణ & ఆంధ్ర</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeCollectionTab === '1st day WW' && styles.activeTab]}
          onPress={() => setActiveCollectionTab('1st day WW')}>
          <Text style={[styles.tabText, activeCollectionTab === '1st day WW' ? styles.activeTabText : styles.inactiveTabText]}>మొదటి రోజు ప్రపంచవ్యాప్తంగా</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeCollectionTab === 'Closing WW' && styles.activeTab]}
          onPress={() => setActiveCollectionTab('Closing WW')}>
          <Text style={[styles.tabText, activeCollectionTab === 'Closing WW' ? styles.activeTabText : styles.inactiveTabText]}>ఫైనల్ కలెక్షన్స్</Text>
        </TouchableOpacity>
      </View>


      <FlatList
        data={collectionData[activeCollectionTab]}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={[styles.table, styles.collectionTable]}
      
         ListHeaderComponent={
          <View style={styles.row}>
            <Text style={styles.headerText}>పేరు</Text>
            <Text style={styles.headerText}>కలెక్షన్</Text>
          </View>
        
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  header: { fontSize: 20, fontWeight: 'bold', color: '#000' },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#2f6fff", // 🔵 Blue dot
    marginLeft: 8,
  },
  line: {
    flex: 1,
    height: 1.5,
    backgroundColor: "#e9eefc", // ❤️ Pink line (change to your color)
    marginLeft: 8,
  },
  tabContainer: { flexDirection: 'row', marginBottom: 10 },
  tab: { flex: 1, padding: 10, backgroundColor: '#f0f0f0', alignItems: 'center' },
  activeTab: { backgroundColor: '#e94560' },
  tabText: { color: '#000' },
  activeTabText: { color: '#fff' },
  inactiveTabText: { color: '#000' },
  table: { borderWidth: 1, borderColor: '#ccc' },
  collectionTable: { marginTop: 20 },
  row: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#ccc' },
  headerText: { flex: 1, fontWeight: 'bold', padding: 10, color: '#e94560' },
  cell: { flex: 1, padding: 10 },
});

export default Collections;
