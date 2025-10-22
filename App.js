
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
// import RajakiyamComponent from "./src/components/RajakiyamComponent";
// import PostDetails from "./src/components/PostDetails";
// import GalleryScreen from "./src/components/GalleryScreen";
// import SearchScreen from "./src/components/SearchScreen";
// import ProfileScreen from "./src/components/ProfileScreen";
// import LoginScreen from "./src/components/LoginScreen";
// // Add other screens like Movies, Gossips, etc., as needed
// // e.g., import Movies from "./src/components/Movies";

// const Stack = createStackNavigator();

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
//         <Stack.Screen 
//           name="Main" 
//           component={() => (
//             <ScreenLayout language={language} setLanguage={setLanguage}>
//               <MainContent />
//             </ScreenLayout>
//           )} 
//         />
//         <Stack.Screen 
//           name="More" 
//           component={() => (
//             <ScreenLayout language={language} setLanguage={setLanguage}>
//               <MoreScreen language={language} />
//             </ScreenLayout>
//           )} 
//         />
//         <Stack.Screen 
//           name="Politics" 
//           component={() => (
//             <ScreenLayout language={language} setLanguage={setLanguage}>
//               <RajakiyamComponent />
//             </ScreenLayout>
//           )} 
//         />
//         <Stack.Screen 
//           name="PostDetails" 
//           component={({ route }) => (
//             <ScreenLayout isScrollable={false} language={language} setLanguage={setLanguage}>
//               <PostDetails route={route} />
//             </ScreenLayout>
//           )} 
//         />
//         <Stack.Screen 
//           name="Gallery" 
//           component={() => (
//             <ScreenLayout language={language} setLanguage={setLanguage}>
//               <GalleryScreen />
//             </ScreenLayout>
//           )} 
//         />
//         <Stack.Screen 
//           name="Search" 
//           component={() => (
//             <ScreenLayout language={language} setLanguage={setLanguage}>
//               <SearchScreen language={language} />
//             </ScreenLayout>
//           )} 
//         />
//         <Stack.Screen 
//           name="Profile" 
//           component={() => (
//             <ScreenLayout language={language} setLanguage={setLanguage}>
//               <ProfileScreen language={language} />
//             </ScreenLayout>
//           )} 
//         />
//         {/* Add other screens */}
//         {/* <Stack.Screen name="Movies" component={() => <ScreenLayout language={language} setLanguage={setLanguage}><Movies /></ScreenLayout>} /> */}
//         {/* Similar for Gossips, Reviews, Videos, OTT, Sports */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

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
//       <View style={{ height: 50, backgroundColor: "#f0f0f0" }} />
//     </>
//   );
// }

// App.js (Updated with Login functionality and automatic home redirect)
import React, { useState, useEffect } from "react";
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
import LoginScreen from "./src/components/LoginScreen";

const Stack = createStackNavigator();

const ScreenLayout = ({ children, isScrollable = true, language, setLanguage, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNav language={language} setLanguage={setLanguage} navigation={navigation} />
      {isScrollable ? (
        <ScrollView style={{ flex: 1, marginBottom: 60 }}>
          {children}
        </ScrollView>
      ) : (
        <View style={{ flex: 1, marginBottom: 60 }}>
          {children}
        </View>
      )}
      <BottomNav language={language} setLanguage={setLanguage} navigation={navigation} />
    </SafeAreaView>
  );
};

export default function App() {
  const [language, setLanguage] = useState("telugu");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on app start (you can add async storage here later)
  useEffect(() => {
    // Check if user is already logged in (from AsyncStorage or similar)
    // For now, we'll start with logged out state
    setIsLoggedIn(false);
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          // Login Screen Stack
          <Stack.Screen name="Login">
            {(props) => (
              <LoginScreen 
                {...props} 
                language={language} 
                onLoginSuccess={handleLoginSuccess}
              />
            )}
          </Stack.Screen>
        ) : (
          // Main App Stack (only accessible after login)
          <>
            <Stack.Screen name="Main">
              {(props) => (
                <ScreenLayout 
                  language={language} 
                  setLanguage={setLanguage} 
                  navigation={props.navigation}
                >
                  <MainContent />
                </ScreenLayout>
              )}
            </Stack.Screen>

            <Stack.Screen name="More">
              {(props) => (
                <ScreenLayout 
                  language={language} 
                  setLanguage={setLanguage} 
                  navigation={props.navigation}
                >
                  <MoreScreen language={language} onLogout={handleLogout} />
                </ScreenLayout>
              )}
            </Stack.Screen>

            <Stack.Screen name="Politics">
              {(props) => (
                <ScreenLayout 
                  language={language} 
                  setLanguage={setLanguage} 
                  navigation={props.navigation}
                >
                  <RajakiyamComponent />
                </ScreenLayout>
              )}
            </Stack.Screen>

            <Stack.Screen name="PostDetails">
              {(props) => (
                <ScreenLayout 
                  isScrollable={false} 
                  language={language} 
                  setLanguage={setLanguage} 
                  navigation={props.navigation}
                >
                  <PostDetails route={props.route} />
                </ScreenLayout>
              )}
            </Stack.Screen>

            <Stack.Screen name="Gallery">
              {(props) => (
                <ScreenLayout 
                  language={language} 
                  setLanguage={setLanguage} 
                  navigation={props.navigation}
                >
                  <GalleryScreen />
                </ScreenLayout>
              )}
            </Stack.Screen>

            <Stack.Screen name="Search">
              {(props) => (
                <ScreenLayout 
                  language={language} 
                  setLanguage={setLanguage} 
                  navigation={props.navigation}
                >
                  <SearchScreen language={language} />
                </ScreenLayout>
              )}
            </Stack.Screen>

            <Stack.Screen name="Profile">
              {(props) => (
                <ScreenLayout 
                  language={language} 
                  setLanguage={setLanguage} 
                  navigation={props.navigation}
                >
                  <ProfileScreen language={language} onLogout={handleLogout} />
                </ScreenLayout>
              )}
            </Stack.Screen>
          </>
        )}
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