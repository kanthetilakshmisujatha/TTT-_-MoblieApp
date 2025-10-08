// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   ScrollView,
//   TextInput,
//   Platform,
//   Modal,
//   Pressable,
// } from "react-native";
// import { FontAwesome } from "@expo/vector-icons";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [searchText, setSearchText] = useState("");
//   const [activeTab, setActiveTab] = useState("Home");
//   const [hoveredTab, setHoveredTab] = useState(null);

//   const menuItems = [
//     { name: "హోమ్", path: "Home" },
//     { name: "రాజకీయం", path: "Politics" },
//     { name: "సినిమా", path: "Movies" },
//     { name: "గాసిప్స్", path: "Gossips" },
//     { name: "రివ్యూస్", path: "Reviews" },
//     { name: "గ్యాలరీ", path: "Gallery" },
//     { name: "వీడియోలు", path: "Videos" },
//     { name: "ఓటిటి", path: "OTT" },
//     { name: "క్రీడలు", path: "Sports" },
//     { name: "ENGLISH", path: "English" },
//     { name: "Login", path: "Login" },
//   ];

//   const handleNavigation = (path) => {
//     setActiveTab(path);
//     setMenuOpen(false);
//     alert(`Navigate to ${path}`);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Top Bar */}
//       <View style={styles.topBar}>
//         <TouchableOpacity onPress={() => alert("Go Home")}>
//           <Image
//             source={require('../assests/ttt.jpg')} // Local image
//             style={styles.logo}
//           />
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => setMenuOpen(true)}>
//           <FontAwesome name="bars" size={28} color="#000000ff" />
//         </TouchableOpacity>
//       </View>

//       {/* Menu Modal */}
//       <Modal visible={menuOpen} animationType="slide" transparent={true}>
//         <Pressable
//           style={styles.modalContainer}
//           onPress={() => setMenuOpen(false)}
//         >
//           <View style={styles.modalContent}>
//             <ScrollView>
//               {menuItems.map((item, index) => (
//                 <Pressable
//                   key={index}
//                   onPress={() => handleNavigation(item.path)}
//                   onPressIn={() => setHoveredTab(item.path)}
//                   onPressOut={() => setHoveredTab(null)}
//                   style={styles.modalItem}
//                 >
//                   <Text
//                     style={[
//                       styles.menuText,
//                       (activeTab === item.path || hoveredTab === item.path) &&
//                         styles.hoveredText,
//                     ]}
//                   >
//                     {item.name}
//                   </Text>
//                 </Pressable>
//               ))}

//               {/* Search Box */}
//               <View style={styles.searchBox}>
//                 <TextInput
//                   style={styles.searchInput}
//                   placeholder="Search..."
//                   placeholderTextColor="#ccc"
//                   value={searchText}
//                   onChangeText={setSearchText}
//                 />
//                 <TouchableOpacity
//                   onPress={() => {
//                     alert(searchText ? `Searching for "${searchText}"` : "Search something!");
//                     setSearchText("");
//                     setMenuOpen(false);
//                   }}
//                   style={styles.searchBtn}
//                 >
//                   <Text style={{ color: "#fff", fontWeight: "bold" }}>Search</Text>
//                 </TouchableOpacity>
//               </View>

//               {/* Close Button */}
//               <TouchableOpacity
//                 onPress={() => setMenuOpen(false)}
//                 style={styles.closeBtn}
//               >
//                 <Text style={{ color: "#fff", fontWeight: "bold" }}>Close</Text>
//               </TouchableOpacity>
//             </ScrollView>
//           </View>
//         </Pressable>
//       </Modal>
//     </View>
//   );
// };

// export default Navbar;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#ffffffff",
//     paddingTop: Platform.OS === "ios" ? 80 : 40,
//     paddingHorizontal: 10,
//   },
//   topBar: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   logo: { width: 150, height: 60, resizeMode: "contain" },
//   modalContainer: {
//     flex: 1,
//     backgroundColor: "rgba(0,0,0,0.5)",
//     justifyContent: "flex-start",
//   },
//   modalContent: {
//     backgroundColor: "#000",
//     width: "80%",
//     paddingVertical: 30,
//     paddingHorizontal: 20,
//     alignSelf: "flex-end", // slides from right
//     height: "100%",
//   },
//   modalItem: {
//     paddingVertical: 15,
//   },
//   menuText: {
//     fontSize: 18,
//     color: "#fff",
//   },
//   hoveredText: {
//     color: "#e26512ff", // Orange color on hover
//   },
//   searchBox: {
//     flexDirection: "row",
//     marginTop: 20,
//     borderWidth: 1,
//     borderColor: "#e26512ff",
//     borderRadius: 5,
//     overflow: "hidden",
//   },
//   searchInput: {
//     flex: 1,
//     paddingHorizontal: 10,
//     color: "#fff",
//   },
//   searchBtn: {
//     backgroundColor: "#e26512ff",
//     padding: 10,
//     justifyContent: "center",
//     alignItems: "center",
//     marginLeft: 5, // space between input and button
//     borderRadius: 5,
//   },
//   closeBtn: {
//     marginTop: 20, // space between search box and close button
//     alignItems: "center",
//     padding: 10,
//     backgroundColor: "#e26512ff",
//     borderRadius: 5,
//   },
// });

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const TopNav = ({ language, setLanguage }) => {
  const navigation = useNavigation();

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "telugu" ? "english" : "telugu"));
  };

  return (
    <View style={styles.topContainer}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <Image
            source={require("../assests/ttt.jpg")}
            style={styles.logo}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleLanguage} style={styles.toggleBtn}>
          <Text style={styles.toggleText}>
            {language === "telugu" ? "EN" : "తె"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const MoreScreen = ({ language }) => {
  const navigation = useNavigation();

  const getMenuItems = (lang) => [
    { key: "politics", path: "Politics", nameTel: "రాజకీయం", nameEn: "Politics", image: require("../assests/policts.webp") },
    { key: "movies", path: "Movies", nameTel: "సినిమా", nameEn: "Movies", image: require("../assests/movie.jpg") },
    { key: "gossips", path: "Gossips", nameTel: "గాసిప్స్", nameEn: "Gossips", image: require("../assests/gossips.avif") },
    { key: "reviews", path: "Reviews", nameTel: "రివ్యూస్", nameEn: "Reviews", image: require("../assests/revie.png") },
    { key: "gallery", path: "Gallery", nameTel: "గ్యాలరీ", nameEn: "Gallery", image: require("../assests/gallery.webp") },
    { key: "videos", path: "Videos", nameTel: "వీడియోలు", nameEn: "Videos", image: require("../assests/videos.jpg") },
    { key: "ott", path: "OTT", nameTel: "ఓటిటి", nameEn: "OTT", image: require("../assests/ott.jpg") },
    { key: "sports", path: "Sports", nameTel: "క్రీడలు", nameEn: "Sports", image: require("../assests/sports.jpg") },
  ];

  const menuItems = getMenuItems(language);

  const handleNavigation = (path) => {
    navigation.navigate(path);
  };

  return (
    <ScrollView style={styles.moreScreenContainer}>
      <View style={styles.cardsContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleNavigation(item.path)}
            style={styles.card}
          >
            <Image source={item.image} style={styles.cardImage} />
            <View style={styles.overlay} />
            <Text style={styles.cardText}>
              {language === "telugu" ? item.nameTel : item.nameEn}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const BottomNav = ({ language, setLanguage }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomContainer}>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate("Main")}>
          <FontAwesome name="home" size={24} color="#000" />
          <Text style={styles.iconLabel}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate("More")}>
          <FontAwesome name="ellipsis-h" size={24} color="#000" />
          <Text style={styles.iconLabel}>More</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate("Search")}>
          <FontAwesome name="search" size={24} color="#000" />
          <Text style={styles.iconLabel}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate("Profile")}>
          <FontAwesome name="user" size={24} color="#000" />
          <Text style={styles.iconLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { TopNav, BottomNav, MoreScreen };

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: "#ffffffff",
    paddingTop: Platform.OS === "ios" ? 80 : 40,
    paddingHorizontal: 10,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: { width: 150, height: 60, resizeMode: "contain" },
  toggleBtn: {
    padding: 10,
    backgroundColor: "#e26512ff",
    borderRadius: 5,
  },
  toggleText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    height: 60,
  },
  iconBtn: {
    alignItems: "center",
    flex: 1,
  },
  iconLabel: {
    fontSize: 10,
    color: "#666",
    marginTop: 2,
  },
  moreScreenContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 20,
  },
  card: {
    width: "48%",
    height: 150,
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
    position: "relative",
  },
  cardImage: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  cardText: {
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    transform: [{ translateY: -10 }],
  },
});