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
  TextInput,
  Platform,
  Modal,
  Pressable,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // import navigation hook

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [activeTab, setActiveTab] = useState("Home");
  const [hoveredTab, setHoveredTab] = useState(null);

  const navigation = useNavigation(); // hook

  const menuItems = [
    { name: "హోమ్", path: "Main" },
    { name: "రాజకీయం", path: "Politics" },
    { name: "సినిమా", path: "Movies" },
    { name: "గాసిప్స్", path: "Gossips" },
    { name: "రివ్యూస్", path: "Reviews" },
    { name: "గ్యాలరీ", path: "Gallery" },
    { name: "వీడియోలు", path: "Videos" },
    { name: "ఓటిటి", path: "OTT" },
    { name: "క్రీడలు", path: "Sports" },
    { name: "ENGLISH", path: "English" },
    { name: "Login", path: "Login" },
  ];

  const handleNavigation = (path) => {
    setActiveTab(path);
    setMenuOpen(false);
    navigation.navigate(path); // navigate to that screen
  };

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <Image
            source={require("../assests/ttt.jpg")}
            style={styles.logo}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setMenuOpen(true)}>
          <FontAwesome name="bars" size={28} color="#000000ff" />
        </TouchableOpacity>
      </View>

      {/* Menu Modal */}
      <Modal visible={menuOpen} animationType="slide" transparent={true}>
        <Pressable
          style={styles.modalContainer}
          onPress={() => setMenuOpen(false)}
        >
          <View style={styles.modalContent}>
            <ScrollView>
              {menuItems.map((item, index) => (
                <Pressable
                  key={index}
                  onPress={() => handleNavigation(item.path)}
                  onPressIn={() => setHoveredTab(item.path)}
                  onPressOut={() => setHoveredTab(null)}
                  style={styles.modalItem}
                >
                  <Text
                    style={[
                      styles.menuText,
                      (activeTab === item.path || hoveredTab === item.path) &&
                        styles.hoveredText,
                    ]}
                  >
                    {item.name}
                  </Text>
                </Pressable>
              ))}

              {/* Search Box */}
              <View style={styles.searchBox}>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search..."
                  placeholderTextColor="#ccc"
                  value={searchText}
                  onChangeText={setSearchText}
                />
                <TouchableOpacity
                  onPress={() => {
                    alert(
                      searchText
                        ? `Searching for "${searchText}"`
                        : "Search something!"
                    );
                    setSearchText("");
                    setMenuOpen(false);
                  }}
                  style={styles.searchBtn}
                >
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>
                    Search
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Close Button */}
              <TouchableOpacity
                onPress={() => setMenuOpen(false)}
                style={styles.closeBtn}
              >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>Close</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
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
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-start",
  },
  modalContent: {
    backgroundColor: "#000",
    width: "80%",
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignSelf: "flex-end",
    height: "100%",
  },
  modalItem: {
    paddingVertical: 15,
  },
  menuText: {
    fontSize: 18,
    color: "#fff",
  },
  hoveredText: {
    color: "#e26512ff",
  },
  searchBox: {
    flexDirection: "row",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#e26512ff",
    borderRadius: 5,
    overflow: "hidden",
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    color: "#fff",
  },
  searchBtn: {
    backgroundColor: "#e26512ff",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
    borderRadius: 5,
  },
  closeBtn: {
    marginTop: 20,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#e26512ff",
    borderRadius: 5,
  },
});
