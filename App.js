// import React from "react";
// import { SafeAreaView, ScrollView, View } from "react-native";
// import Navbar from "./src/components/Navbar";
// import Home from "./src/components/Home";
// import Top9NewsApp from "./src/components/Top9NewsApp";
// import Collections from "./src/components/Collections";
// import Gallery from "./src/components/Gallery";
// import Trailer from "./src/components/Trailer";
// import MostView from "./src/components/MostView";
// import ReviewsSection from "./src/components/ReviewsSection";
// import DiscoverSection from "./src/components/DiscoverSection";
// import Footer from "./src/components/Footer";

// export default function App() {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <ScrollView>
//         <Navbar />
//         <Home />
//         <Top9NewsApp />
//         <Collections />
//         <Gallery />
//         <Trailer />
//         <MostView />
//         <ReviewsSection />
//         <DiscoverSection/> 
// <Footer/>
//         {/* Dummy content for scrolling */}
//         <View style={{ height: 50, backgroundColor: "#f0f0f0" }} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }
import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Navbar from "./src/components/Navbar";
import Home from "./src/components/Home";
import Top9NewsApp from "./src/components/Top9NewsApp";
import Collections from "./src/components/Collections";
import Gallery from "./src/components/Gallery";
import Trailer from "./src/components/Trailer";
import MostView from "./src/components/MostView";
import ReviewsSection from "./src/components/ReviewsSection";
import DiscoverSection from "./src/components/DiscoverSection";
import Footer from "./src/components/Footer";

// Import your Politics Component
import RajakiyamComponent from "./src/components/RajakiyamComponent";
import PostDetails from "./src/components/PostDetails";
import GalleryScreen from "./src/components/GalleryScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Main Page with Navbar + Home + other sections */}
        <Stack.Screen name="Main" component={MainScreen} />

        {/* Politics Page */}
        <Stack.Screen name="Politics" component={RajakiyamComponent} />
        <Stack.Screen name="PostDetails" component={PostDetails} />
        <Stack.Screen name="Gallery" component={GalleryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Main Screen which has Navbar + Home + all your components
function MainScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Navbar />
        <Home />
        <Top9NewsApp />
        <Collections />
        <Gallery />
        <Trailer />
        <MostView />
        <ReviewsSection />
        <DiscoverSection />
        <Footer />
        {/* Dummy content for scrolling */}
        <View style={{ height: 50, backgroundColor: "#f0f0f0" }} />
      </ScrollView>
    </SafeAreaView>
  );
}
