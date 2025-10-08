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
// import React from "react";
// import { SafeAreaView, ScrollView, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

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

// // Import your Politics Component
// import RajakiyamComponent from "./src/components/RajakiyamComponent";
// import PostDetails from "./src/components/PostDetails";
// import GalleryScreen from "./src/components/GalleryScreen";

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         {/* Main Page with Navbar + Home + other sections */}
//         <Stack.Screen name="Main" component={MainScreen} />

//         {/* Politics Page */}
//         <Stack.Screen name="Politics" component={RajakiyamComponent} />
//         <Stack.Screen name="PostDetails" component={PostDetails} />
//         <Stack.Screen name="Gallery" component={GalleryScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// // Main Screen which has Navbar + Home + all your components
// function MainScreen() {
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
//         <DiscoverSection />
//         <Footer />
//         {/* Dummy content for scrolling */}
//         <View style={{ height: 50, backgroundColor: "#f0f0f0" }} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }




// import React, { useState } from "react";
// import { SafeAreaView, ScrollView, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// import { TopNav, BottomNav, MoreScreen } from "./src/components/Navbar";
// import Home from "./src/components/Home";
// import Top9NewsApp from "./src/components/Top9NewsApp";
// import Collections from "./src/components/Collections";
// import Gallery from "./src/components/Gallery";
// import Trailer from "./src/components/Trailer";
// import MostView from "./src/components/MostView";
// import ReviewsSection from "./src/components/ReviewsSection";
// import DiscoverSection from "./src/components/DiscoverSection";

// // Import your Politics Component
// import RajakiyamComponent from "./src/components/RajakiyamComponent";
// import PostDetails from "./src/components/PostDetails";
// import GalleryScreen from "./src/components/GalleryScreen";

// const Stack = createStackNavigator();

// // Define ScreenLayout here to avoid new file
// const ScreenLayout = ({ children, isScrollable = true, language, setLanguage }) => {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <TopNav language={language} setLanguage={setLanguage} />
//       {isScrollable ? (
//         <ScrollView style={{ flex: 1, marginBottom: 60 }}>
//           {children}
//         </ScrollView>
//       ) : (
//         <View style={{ flex: 1, marginBottom: 60 }}>
//           {children}
//         </View>
//       )}
//       <BottomNav language={language} setLanguage={setLanguage} />
//     </SafeAreaView>
//   );
// };

// export default function App() {
//   const [language, setLanguage] = useState("telugu");

//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         {/* Main Page with Navbar + Home + other sections - using ScreenLayout */}
//         <Stack.Screen 
//           name="Main" 
//           component={() => (
//             <ScreenLayout language={language} setLanguage={setLanguage}>
//               <MainContent />
//             </ScreenLayout>
//           )} 
//         />

//         {/* More Page */}
//         <Stack.Screen 
//           name="More" 
//           component={() => (
//             <ScreenLayout language={language} setLanguage={setLanguage}>
//               <MoreScreen language={language} />
//             </ScreenLayout>
//           )} 
//         />

//         {/* Politics Page - wrapped in ScreenLayout */}
//         <Stack.Screen 
//           name="Politics" 
//           component={() => (
//             <ScreenLayout language={language} setLanguage={setLanguage}>
//               <RajakiyamComponent />
//             </ScreenLayout>
//           )} 
//         />
        
//         {/* PostDetails - wrapped, no scroll if needed */}
//         <Stack.Screen 
//           name="PostDetails" 
//           component={() => (
//             <ScreenLayout isScrollable={false} language={language} setLanguage={setLanguage}>
//               <PostDetails />
//             </ScreenLayout>
//           )} 
//         />
        
//         {/* Gallery - wrapped */}
//         <Stack.Screen 
//           name="Gallery" 
//           component={() => (
//             <ScreenLayout language={language} setLanguage={setLanguage}>
//               <GalleryScreen />
//             </ScreenLayout>
//           )} 
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// // MainContent - just the content without extra ScreenLayout
// function MainContent() {
//   return (
//     <>
//       <Home />
//       <Top9NewsApp />
//       <Collections />
//       <Gallery />
//       <Trailer />
//       <MostView />
//       <ReviewsSection />
//       <DiscoverSection />
//       {/* Dummy content for scrolling */}
//       <View style={{ height: 50, backgroundColor: "#f0f0f0" }} />
//     </>
//   );
// }


import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { TopNav, BottomNav, MoreScreen } from "./src/components/Navbar";
import Home from "./src/components/Home";
import Top9NewsApp from "./src/components/Top9NewsApp";
import Collections from "./src/components/Collections";
import Gallery from "./src/components/Gallery";
import Trailer from "./src/components/Trailer";
import MostView from "./src/components/MostView";
import ReviewsSection from "./src/components/ReviewsSection";
import DiscoverSection from "./src/components/DiscoverSection";
import RajakiyamComponent from "./src/components/RajakiyamComponent";
import PostDetails from "./src/components/PostDetails";
import GalleryScreen from "./src/components/GalleryScreen";
import SearchScreen from "./src/components/SearchScreen";
import ProfileScreen from "./src/components/ProfileScreen";

const Stack = createStackNavigator();

const ScreenLayout = ({ children, isScrollable = true, language, setLanguage }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNav language={language} setLanguage={setLanguage} />
      {isScrollable ? (
        <ScrollView style={{ flex: 1, marginBottom: 60 }}>
          {children}
        </ScrollView>
      ) : (
        <View style={{ flex: 1, marginBottom: 60 }}>
          {children}
        </View>
      )}
      <BottomNav language={language} setLanguage={setLanguage} />
    </SafeAreaView>
  );
};

export default function App() {
  const [language, setLanguage] = useState("telugu");

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen 
          name="Main" 
          component={() => (
            <ScreenLayout language={language} setLanguage={setLanguage}>
              <MainContent />
            </ScreenLayout>
          )} 
        />
        <Stack.Screen 
          name="More" 
          component={() => (
            <ScreenLayout language={language} setLanguage={setLanguage}>
              <MoreScreen language={language} />
            </ScreenLayout>
          )} 
        />
        <Stack.Screen 
          name="Politics" 
          component={() => (
            <ScreenLayout language={language} setLanguage={setLanguage}>
              <RajakiyamComponent />
            </ScreenLayout>
          )} 
        />
        <Stack.Screen 
          name="PostDetails" 
          component={({ route }) => (
            <ScreenLayout isScrollable={false} language={language} setLanguage={setLanguage}>
              <PostDetails route={route} />
            </ScreenLayout>
          )} 
        />
        <Stack.Screen 
          name="Gallery" 
          component={() => (
            <ScreenLayout language={language} setLanguage={setLanguage}>
              <GalleryScreen />
            </ScreenLayout>
          )} 
        />
        <Stack.Screen 
          name="Search" 
          component={() => (
            <ScreenLayout language={language} setLanguage={setLanguage}>
              <SearchScreen language={language} />
            </ScreenLayout>
          )} 
        />
        <Stack.Screen 
          name="Profile" 
          component={() => (
            <ScreenLayout language={language} setLanguage={setLanguage}>
              <ProfileScreen language={language} />
            </ScreenLayout>
          )} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainContent() {
  return (
    <>
      <Home />
      <Top9NewsApp />
      <Collections />
      <Gallery />
      <Trailer />
      <MostView />
      <ReviewsSection />
      <DiscoverSection />
      <View style={{ height: 50, backgroundColor: "#f0f0f0" }} />
    </>
  );
}