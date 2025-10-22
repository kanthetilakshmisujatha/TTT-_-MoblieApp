import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image,
  TouchableOpacity,
  Dimensions,
  Modal
} from "react-native";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get('window');
const posts = [
  {
    title: "భారత్ మార్కెట్లో నెలకు ₹399కి ChatGPT Go ప్లాన్స్ విడుదల చేసిన ఓపెన్ఏఐ",
    category: "News",
    image: "https://blackthorn-vision.com/wp-content/uploads/2025/02/Cover_Can-Chat-GPT-be-detected_11zon-1.webp",
  },
  {
    title: "సినిమా రంగంలో కొత్త రాబోయే చిత్రాలు",
    category: "Movies",
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202506/aamir-khan-120103938-16x9_1.jpg?VersionId=S6w2SQ_GEd3ngFZMEpN.dG1MvD_0ibDI&size=690:388",
  },
  {
    title: "క్రీడల ప్రపంచం: తాజా అప్‌డేట్స్",
    category: "Sports",
    image: "https://wallpapercat.com/w/full/e/9/1/150106-2880x1620-desktop-hd-virat-kohli-background-photo.jpg",
  },
  {
    title: "తెలుగు సినిమా ఇండస్ట్రీలో కొత్త ట్రెండ్స్",
    category: "Movies",
    image: "https://i0.wp.com/godofindia.com/wp-content/uploads/2017/05/rajinikanth.jpg?fit=2600%2C1614&ssl=1",
  },
  {
    title: "ఆర్థిక సంస్కరణలపై కేంద్ర ప్రభుత్వం ప్రకటన",
    category: "News",
    image: "https://i.pinimg.com/736x/15/57/6a/15576a4b0af6a55fc17e1367f082515f.jpg",
  }
];

const Card = ({ post }) => {
  const getCategoryColor = (category) => {
    switch(category) {
      case "News": return "#FF6B6B";
      case "Movies": return "#4ECDC4";
      case "Sports": return "#45B7D1";
      default: return "#FF6B6B";
    }
  };

  const getCardGradient = (category) => {
    switch(category) {
      case "News": return ["#FF6B6B", "#FF8E8E"];
      case "Movies": return ["#4ECDC4", "#88D8D0"];
      case "Sports": return ["#45B7D1", "#7BCDE6"];
      default: return ["#FF6B6B", "#FF8E8E"];
    }
  };

  return (
    <View style={styles.postCard}>
      <TouchableOpacity activeOpacity={0.9}>
        {/* Card Header with Gradient */}
        <View style={[styles.cardHeader, { 
          backgroundColor: getCardGradient(post.category)[0] 
        }]}>
          <View style={styles.categoryContainer}>
            <FontAwesome 
              name={
                post.category === "News" ? "newspaper-o" :
                post.category === "Movies" ? "film" : "futbol-o"
              } 
              size={16} 
              color="#fff" 
            />
            <Text style={styles.categoryText}>{post.category}</Text>
          </View>
          <View style={styles.timeBadge}>
            <FontAwesome name="clock-o" size={12} color="#fff" />
            <Text style={styles.timeBadgeText}>2 hrs ago</Text>
          </View>
        </View>

        {/* Image Container */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: post.image }} style={styles.postImage} />
          <View style={[styles.imageOverlay, { 
            backgroundColor: getCardGradient(post.category)[1],
            opacity: 0.15
          }]} />
        </View>
        
        {/* Card Content */}
        <View style={styles.postContent}>
          <Text style={styles.postTitle}>{post.title}</Text>
          
          <View style={styles.postFooter}>
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <FontAwesome name="eye" size={14} color="#2D3748" />
                <Text style={styles.statsText}>2.5K</Text>
              </View>
              <View style={styles.statItem}>
                <FontAwesome name="heart" size={14} color="#2D3748" />
                <Text style={styles.statsText}>128</Text>
              </View>
              <View style={styles.statItem}>
                <FontAwesome name="comment" size={14} color="#2D3748" />
                <Text style={styles.statsText}>45</Text>
              </View>
            </View>
            
            <TouchableOpacity style={[styles.readMoreBtn, { 
              backgroundColor: getCategoryColor(post.category) 
            }]}>
              <Text style={styles.readMoreText}>చదవండి</Text>
              <FontAwesome name="arrow-right" size={12} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const FilterModal = ({ visible, onClose, categories, selectedCategory, onCategorySelect }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>వర్గాలు ఫిల్టర్ చేయండి</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <MaterialIcons name="close" size={24} color="#2D3748" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.filterOptions}>
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.filterOption,
                  selectedCategory === category && [
                    styles.filterOptionSelected,
                    { backgroundColor: getCategoryColor(category) }
                  ]
                ]}
                onPress={() => onCategorySelect(category)}
              >
                <FontAwesome 
                  name={
                    category === "News" ? "newspaper-o" :
                    category === "Movies" ? "film" : "futbol-o"
                  } 
                  size={18} 
                  color={selectedCategory === category ? "#fff" : getCategoryColor(category)} 
                />
                <Text style={[
                  styles.filterOptionText,
                  selectedCategory === category && styles.filterOptionTextSelected
                ]}>
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          
          <TouchableOpacity 
            style={styles.resetButton}
            onPress={() => onCategorySelect(null)}
          >
            <Text style={styles.resetButtonText}>అన్ని వర్గాలు చూపించు</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

// Helper function for category colors
const getCategoryColor = (category) => {
  switch(category) {
    case "News": return "#FF6B6B";
    case "Movies": return "#4ECDC4";
    case "Sports": return "#45B7D1";
    default: return "#FF6B6B";
  }
};

const Home = () => {
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const categories = ["News", "Movies", "Sports"];
  
  const filteredPosts = selectedCategory 
    ? posts.filter(post => post.category === selectedCategory)
    : posts;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#1a1a2e", "#16213e", "#0f3460"]}
        style={styles.gradientBackground}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>తెలుగు వార్తలు</Text>
            <Text style={styles.headerSubtitle}>తాజా సమాచారం మరియు అప్‌డేట్స్</Text>
          </View>
          <TouchableOpacity 
            style={styles.filterButton}
            onPress={() => setFilterModalVisible(true)}
          >
            <FontAwesome name="sliders" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Stats Overview */}
        <View style={styles.statsOverview}>
          <View style={styles.statCard}>
            <MaterialIcons name="article" size={24} color="#4ECDC4" />
            <Text style={styles.statNumber}>45</Text>
            <Text style={styles.statLabel}>వార్తలు</Text>
          </View>
          <View style={styles.statCard}>
            <MaterialIcons name="visibility" size={24} color="#45B7D1" />
            <Text style={styles.statNumber}>12.5K</Text>
            <Text style={styles.statLabel}>చూపులు</Text>
          </View>
          <View style={styles.statCard}>
            <MaterialIcons name="people" size={24} color="#FF6B6B" />
            <Text style={styles.statNumber}>2.3K</Text>
            <Text style={styles.statLabel}>పాఠకులు</Text>
          </View>
        </View>

        <ScrollView 
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <Text style={styles.sectionTitle}>
            {selectedCategory ? `${selectedCategory} వార్తలు` : 'అన్ని వార్తలు'}
          </Text>
          
          {filteredPosts.map((post, index) => (
            <Card key={index} post={post} />
          ))}
        </ScrollView>

        <FilterModal
          visible={filterModalVisible}
          onClose={() => setFilterModalVisible(false)}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
      </LinearGradient>
    </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 24,
    paddingTop: 30, // Reduced from 60 to move title up
    paddingBottom: 20,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 0.5,
    marginTop: 0, // Adjusted to align with reduced padding
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '600',
  },
  filterButton: {
    padding: 14,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginTop: 4,
  },
  statsOverview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginTop: 8,
  },
  statCard: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: 16,
    borderRadius: 20,
    minWidth: 80,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.9)',
    marginTop: 4,
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingTop: 8,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },
  postCard: {
    backgroundColor: '#fff',
    borderRadius: 25,
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 8,
    letterSpacing: 0.5,
  },
  timeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  timeBadgeText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
    marginLeft: 4,
  },
  imageContainer: {
    position: 'relative',
  },
  postImage: {
    width: '100%',
    height: 200,
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  postContent: {
    padding: 20,
    backgroundColor: '#fff',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2D3748',
    lineHeight: 26,
    textAlign: 'left',
    marginBottom: 16,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statsText: {
    color: '#2D3748',
    fontSize: 12,
    fontWeight: '600',
  },
  readMoreBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    gap: 6,
  },
  readMoreText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
  // Filter Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
    minHeight: 320,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  closeButton: {
    padding: 8,
    backgroundColor: '#F7FAFC',
    borderRadius: 12,
  },
  filterOptions: {
    marginBottom: 24,
  },
  filterOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    backgroundColor: '#F7FAFC',
  },
  filterOptionSelected: {
    borderColor: 'transparent',
  },
  filterOptionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A5568',
    marginLeft: 14,
  },
  filterOptionTextSelected: {
    color: '#fff',
  },
  resetButton: {
    backgroundColor: '#F7FAFC',
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E2E8F0',
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4A5568',
  },
});

export default Home;