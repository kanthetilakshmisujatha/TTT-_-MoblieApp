import React, { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  StyleSheet, 
  ScrollView, 
  FlatList,
  SafeAreaView,
  Dimensions 
} from "react-native";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from 'lottie-react-native';

const { width: screenWidth } = Dimensions.get('window');

const SearchScreen = ({ language }) => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showRecent, setShowRecent] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Bilingual texts
  const texts = {
    appTitle: language === "telugu" ? "వార్తలు" : "News",
    searchPlaceholder: language === "telugu" ? "వార్తలను శోధించండి..." : "Search news...",
    startSearch: language === "telugu" ? "మీ శోధన ప్రారంభించండి" : "Start Your Search",
    noData: language === "telugu" ? "ఫలితాలు లేవు" : "No Results Found",
    tryAgain: language === "telugu" ? "మళ్లీ ప్రయత్నించండి" : "Try Again",
    recentSearches: language === "telugu" ? "ఇటీవలి శోధనలు" : "Recent Searches",
    clearAll: language === "telugu" ? "అన్నీ తొలగించు" : "Clear All",
    popularSearches: language === "telugu" ? "జనప్రియ శోధనలు" : "Popular Searches",
    source: language === "telugu" ? "మూలం" : "Source",
    readMore: language === "telugu" ? "మరింత చదవండి" : "Read More",
    searching: language === "telugu" ? "శోధిస్తున్నాం..." : "Searching...",
    breakingNews: language === "telugu" ? "తాజా వార్తలు" : "Breaking News",
    liveUpdates: language === "telugu" ? "తాజా నవీకరణలు" : "Live Updates",
  };

  // Categories for filtering
  const categories = [
    { id: "All", label: language === "telugu" ? "అన్నీ" : "All" },
    { id: "Sports", label: language === "telugu" ? "క్రీడలు" : "Sports" },
    { id: "Politics", label: language === "telugu" ? "రాజకీయాలు" : "Politics" },
    { id: "Entertainment", label: language === "telugu" ? "వినోదం" : "Entertainment" },
    { id: "Business", label: language === "telugu" ? "వ్యాపారం" : "Business" },
    { id: "Technology", label: language === "telugu" ? "టెక్నాలజీ" : "Technology" },
  ];

  // Lottie Animation URLs
  const lottieAnimations = {
    loading: "https://assets1.lottiefiles.com/packages/lf20_usmfx6bp.json",
    noResults: "https://assets1.lottiefiles.com/packages/lf20_kcsr6fcp.json",
    emptySearch: "https://assets1.lottiefiles.com/packages/lf20_gn0tojcq.json"
  };

  // Debounced search function
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchText.trim()) {
        handleSearch();
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [searchText, selectedCategory]);

  const handleSearch = () => {
    if (searchText.trim()) {
      setIsLoading(true);
      setShowRecent(false);
      
      setTimeout(() => {
        const dummyResults = [
          { 
            id: 1, 
            title: language === "telugu" ? "క్రికెట్ మ్యాచ్ ఫలితాలు" : "Cricket Match Results", 
            image: "https://images.unsplash.com/photo-1559818868-0eceae8819a6?w=400&h=250&fit=crop",
            snippet: language === "telugu" ? "భారత్ vs ఆస్ట్రేలియా T20 మ్యాచ్ హైలైట్స్..." : "India vs Australia T20 match highlights...",
            source: "Eenadu",
            time: "2h ago",
            category: "Sports"
          },
          { 
            id: 2, 
            title: language === "telugu" ? "రాజకీయ వార్తలు" : "Political News Update", 
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
            snippet: language === "telugu" ? "కొత్త చట్టం ప్రవేశం పార్లమెంట్‌లో..." : "New legislation passed in parliament...",
            source: "Andhra Jyothi",
            time: "5h ago",
            category: "Politics"
          },
          { 
            id: 3, 
            title: language === "telugu" ? "సినిమా రివ్యూ" : "Movie Review", 
            image: "https://images.unsplash.com/photo-1489599189054-6f8f4e8e1b7e?w=400&h=250&fit=crop",
            snippet: language === "telugu" ? "హిట్ సినిమా విడుదల..." : "Latest blockbuster receives rave reviews...",
            source: "Sakshi",
            time: "1d ago",
            category: "Entertainment"
          },
        ].filter(item => {
          const matchesText = 
            item.title.toLowerCase().includes(searchText.toLowerCase()) ||
            item.snippet.toLowerCase().includes(searchText.toLowerCase());
          const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
          return matchesText && matchesCategory;
        });
        
        setSearchResults(dummyResults);
        setIsLoading(false);
      }, 1000);
    } else {
      setSearchResults([]);
      setShowRecent(true);
      setIsLoading(false);
    }
  };

  const recentSearches = language === "telugu" ? 
    ["క్రికెట్", "సినిమాలు", "రాజకీయాలు", "బడ్జెట్"] : 
    ["Cricket", "Movies", "Politics", "Budget"];
  
  const popularSearches = language === "telugu" ? 
    ["ప్రధాన మంత్రి", "టాలీవుడ్", "వ్యాపారం", "స్పోర్ట్స్", "టెక్నాలజీ"] : 
    ["PM Modi", "Tollywood", "Business", "Sports", "Technology"];

  const clearRecent = () => {
    setShowRecent(false);
  };

  const handleChipPress = (term) => {
    setSearchText(term);
  };

  const renderNewsCard = ({ item }) => {
    return (
      <View style={styles.newsCard}>
        <Image source={{ uri: item.image }} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{item.category}</Text>
          </View>
          <Text style={styles.cardTitle} numberOfLines={2}>{item.title}</Text>
          <Text style={styles.cardSnippet} numberOfLines={3}>{item.snippet}</Text>
          <View style={styles.cardFooter}>
            <View style={styles.sourceContainer}>
              <MaterialIcons name="source" size={14} color="#e94560" />
              <Text style={styles.cardSource}>{item.source}</Text>
            </View>
            <Text style={styles.timeText}>{item.time}</Text>
            <TouchableOpacity style={styles.readMoreBtn}>
              <Text style={styles.readMoreText}>{texts.readMore}</Text>
              <MaterialIcons name="arrow-forward" size={14} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#1a1a2e", "#16213e", "#0f3460"]}
        style={styles.gradientBackground}
      >
        {/* Fixed Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View>
              <Text style={styles.appTitle}>{texts.appTitle}</Text>
              <Text style={styles.headerSubtitle}>
                {language === "telugu" ? "తాజా వార్తలు" : "Latest News"}
              </Text>
            </View>
            <TouchableOpacity style={styles.notificationBtn}>
              <Ionicons name="notifications-outline" size={24} color="#e94560" />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView 
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Search Section */}
          <View style={styles.searchSection}>
            {/* Search Bar */}
            <View style={styles.searchBarContainer}>
              <View style={styles.searchInputContainer}>
                <FontAwesome name="search" size={20} color="#666" style={styles.searchIcon} />
                <TextInput
                  style={styles.searchInput}
                  placeholder={texts.searchPlaceholder}
                  placeholderTextColor="#999"
                  value={searchText}
                  onChangeText={setSearchText}
                  returnKeyType="search"
                />
                {searchText ? (
                  <TouchableOpacity 
                    onPress={() => setSearchText("")}
                    style={styles.clearBtn}
                  >
                    <MaterialIcons name="close" size={20} color="#999" />
                  </TouchableOpacity>
                ) : null}
              </View>
              
              <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
                <FontAwesome name="search" size={18} color="#fff" />
              </TouchableOpacity>
            </View>

            {/* Category Filter */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoryContainer}
            >
              {categories.map((category) => (
                <TouchableOpacity
                  key={category.id}
                  style={[
                    styles.categoryChip,
                    selectedCategory === category.id && styles.selectedCategoryChip,
                  ]}
                  onPress={() => setSelectedCategory(category.id)}
                >
                  <Text
                    style={[
                      styles.categoryChipText,
                      selectedCategory === category.id && styles.selectedCategoryChipText,
                    ]}
                  >
                    {category.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Breaking News Banner */}
          <View style={styles.breakingNewsBanner}>
            <View style={styles.breakingNewsHeader}>
              <MaterialIcons name="flash-on" size={18} color="#fff" />
              <Text style={styles.breakingNewsText}>{texts.breakingNews}</Text>
            </View>
            <Text style={styles.breakingNewsTitle} numberOfLines={2}>
              {language === "telugu" ? "తాజా బ్రేకింగ్ న్యూస్ అప్‌డేట్స్" : "Latest Breaking News Updates"}
            </Text>
          </View>

          {/* Recent & Popular Searches */}
          {showRecent && !isLoading && (
            <View style={styles.chipsSection}>
              {/* Recent Searches */}
              <View style={styles.recentSection}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionTitle}>{texts.recentSearches}</Text>
                  <TouchableOpacity onPress={clearRecent}>
                    <Text style={styles.clearText}>{texts.clearAll}</Text>
                  </TouchableOpacity>
                </View>
                
                <View style={styles.chipsContainer}>
                  {recentSearches.map((term, index) => (
                    <TouchableOpacity 
                      key={`recent-${index}`}
                      style={styles.chip}
                      onPress={() => handleChipPress(term)}
                    >
                      <Text style={styles.chipText}>{term}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Popular Searches */}
              <View style={styles.popularSection}>
                <Text style={styles.sectionTitle}>{texts.popularSearches}</Text>
                <View style={styles.chipsContainer}>
                  {popularSearches.map((term, index) => (
                    <TouchableOpacity 
                      key={`popular-${index}`}
                      style={[styles.chip, styles.popularChip]}
                      onPress={() => handleChipPress(term)}
                    >
                      <Text style={[styles.chipText, styles.popularChipText]}>{term}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
          )}

          {/* Loading State */}
          {isLoading && (
            <View style={styles.loadingContainer}>
              <LottieView
                source={{ uri: lottieAnimations.loading }}
                style={styles.loadingLottie}
                autoPlay
                loop
              />
              <Text style={styles.loadingText}>{texts.searching}</Text>
            </View>
          )}

          {/* Search Results */}
          {searchResults.length > 0 && !isLoading && (
            <View style={styles.resultsSection}>
              <Text style={styles.resultsTitle}>
                {language === "telugu" ? "శోధన ఫలితాలు" : "Search Results"} ({searchResults.length})
              </Text>
              <FlatList
                data={searchResults}
                renderItem={renderNewsCard}
                keyExtractor={(item) => item.id.toString()}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
              />
            </View>
          )}

          {/* No Results */}
          {searchText && searchResults.length === 0 && !isLoading && (
            <View style={styles.noResultsContainer}>
              <LottieView
                source={{ uri: lottieAnimations.noResults }}
                style={styles.noDataLottie}
                autoPlay
                loop
              />
              <Text style={styles.noDataText}>{texts.noData}</Text>
              <Text style={styles.noDataSubtext}>
                {language === "telugu" ? 
                  "మీ శోధనకు సరిపోయిన ఫలితాలు లేవు" : 
                  "No results found for your search"}
              </Text>
              <TouchableOpacity 
                style={styles.tryAgainBtn} 
                onPress={() => {
                  setSearchText("");
                  setShowRecent(true);
                  setSelectedCategory("All");
                }}
              >
                <Text style={styles.tryAgainText}>{texts.tryAgain}</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Empty State */}
          {!searchText && !isLoading && !showRecent && (
            <View style={styles.emptyState}>
              <LottieView
                source={{ uri: lottieAnimations.emptySearch }}
                style={styles.emptyLottie}
                autoPlay
                loop
              />
              <Text style={styles.emptyStateText}>{texts.startSearch}</Text>
            </View>
          )}
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#ccc",
    marginTop: 2,
  },
  notificationBtn: {
    padding: 8,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 12,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 30,
  },
  searchSection: {
    marginBottom: 20,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    gap: 12,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 20,
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  clearBtn: {
    padding: 4,
  },
  searchButton: {
    backgroundColor: "#e94560",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryContainer: {
    paddingVertical: 5,
    gap: 8,
  },
  categoryChip: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  selectedCategoryChip: {
    backgroundColor: "#e94560",
    borderColor: "#e94560",
  },
  categoryChipText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "600",
  },
  selectedCategoryChipText: {
    color: "#fff",
  },
  breakingNewsBanner: {
    backgroundColor: "rgba(233, 69, 96, 0.9)",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  breakingNewsHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  breakingNewsText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "700",
    marginLeft: 6,
  },
  breakingNewsTitle: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
    lineHeight: 22,
  },
  chipsSection: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  recentSection: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  clearText: {
    fontSize: 14,
    color: "#e94560",
    fontWeight: "600",
  },
  chipsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  chip: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  popularChip: {
    backgroundColor: "rgba(233, 69, 96, 0.1)",
    borderColor: "#e94560",
  },
  chipText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "600",
  },
  popularChipText: {
    color: "#e94560",
  },
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  loadingLottie: {
    width: 120,
    height: 120,
  },
  loadingText: {
    fontSize: 16,
    color: "#e94560",
    fontWeight: "600",
    marginTop: 10,
  },
  resultsSection: {
    marginBottom: 20,
  },
  resultsTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 15,
  },
  newsCard: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 12,
    marginBottom: 15,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  cardImage: {
    width: "100%",
    height: 160,
  },
  cardContent: {
    padding: 16,
  },
  categoryBadge: {
    backgroundColor: "rgba(233, 69, 96, 0.1)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 12,
    color: "#e94560",
    fontWeight: "600",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 8,
    lineHeight: 22,
  },
  cardSnippet: {
    fontSize: 14,
    color: "#ccc",
    lineHeight: 20,
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sourceContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  cardSource: {
    fontSize: 12,
    color: "#e94560",
    fontWeight: "600",
    marginLeft: 5,
  },
  timeText: {
    fontSize: 12,
    color: "#999",
    marginHorizontal: 10,
  },
  readMoreBtn: {
    backgroundColor: "#e94560",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  readMoreText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  noResultsContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  noDataLottie: {
    width: 150,
    height: 150,
  },
  noDataText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "700",
    marginTop: 15,
    textAlign: "center",
  },
  noDataSubtext: {
    fontSize: 14,
    color: "#ccc",
    textAlign: "center",
    marginTop: 5,
    marginBottom: 15,
  },
  tryAgainBtn: {
    backgroundColor: "#e94560",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
  },
  tryAgainText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  emptyLottie: {
    width: 180,
    height: 180,
  },
  emptyStateText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "700",
    marginTop: 15,
    textAlign: "center",
  },
});

export default SearchScreen;