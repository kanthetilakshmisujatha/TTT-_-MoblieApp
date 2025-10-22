// // src/components/LoginScreen.js
// import React, { useState, useRef, useEffect } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   StyleSheet,
//   Animated,
//   SafeAreaView,
//   Dimensions,
//   StatusBar,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
//   Image,
// } from "react-native";
// import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";

// const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

// const LoginScreen = ({ language, onLoginSuccess }) => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");

//   const fadeAnim = useRef(new Animated.Value(0)).current;
//   const slideAnim = useRef(new Animated.Value(50)).current;
//   const logoScale = useRef(new Animated.Value(0.8)).current;

//   useEffect(() => {
//     Animated.parallel([
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 1000,
//         useNativeDriver: true,
//       }),
//       Animated.timing(slideAnim, {
//         toValue: 0,
//         duration: 800,
//         useNativeDriver: true,
//       }),
//       Animated.spring(logoScale, {
//         toValue: 1,
//         tension: 80,
//         friction: 6,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   }, []);

//   const handleAuth = () => {
//     if (email && password) {
//       onLoginSuccess();
//     }
//   };

//   const handleGoogleSignIn = () => {
//     console.log("Google Sign-In pressed");
//     // You can integrate Google Sign-In here using expo-auth-session or firebase
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#e26512" />

//       <LinearGradient
//         colors={["#fff7f0", "#ffe6cc"]}
//         style={styles.gradientBackground}
//       >
//         {/* Decorative Shapes */}
//         <View style={[styles.cornerShape, styles.topLeft]} />
//         <View style={[styles.cornerShape, styles.topRight]} />
//         <View style={[styles.cornerShape, styles.bottomLeft]} />
//         <View style={[styles.cornerShape, styles.bottomRight]} />

//         <KeyboardAvoidingView
//           style={{ flex: 1 }}
//           behavior={Platform.OS === "ios" ? "padding" : "height"}
//         >
//           <ScrollView
//             contentContainerStyle={styles.scrollContent}
//             showsVerticalScrollIndicator={false}
//           >
//             {/* Logo Section */}
//             <Animated.View
//               style={[
//                 styles.logoContainer,
//                 { opacity: fadeAnim, transform: [{ scale: logoScale }] },
//               ]}
//             >
//               <View style={styles.logoCircle}>
//                 <Image
//                   source={require("../assests/ttt.jpg")}
//                   style={styles.logoImage}
//                   resizeMode="cover"
//                 />
//               </View>

//               <Text style={styles.tagline}>
//                 {language === "telugu"
//                   ? "మీ దైనందిన వార్తల సహచరి"
//                   : "Your Daily News Companion"}
//               </Text>
//             </Animated.View>

//             {/* Login/Signup Form */}
//             <Animated.View
//               style={[
//                 styles.formContainer,
//                 { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
//               ]}
//             >
//               <View style={styles.header}>
//                 <Text style={styles.title}>
//                   {isLogin
//                     ? language === "telugu"
//                       ? "స్వాగతం"
//                       : "Welcome Back"
//                     : language === "telugu"
//                     ? "ఖాతా సృష్టించండి"
//                     : "Create Account"}
//                 </Text>
//               </View>

//               {!isLogin && (
//                 <View style={styles.inputWrapper}>
//                   <MaterialIcons
//                     name="person-outline"
//                     size={20}
//                     color="#e26512"
//                     style={styles.inputIcon}
//                   />
//                   <TextInput
//                     style={styles.input}
//                     placeholder={
//                       language === "telugu" ? "వాడుకరి పేరు" : "Username"
//                     }
//                     placeholderTextColor="#999"
//                     value={username}
//                     onChangeText={setUsername}
//                   />
//                 </View>
//               )}

//               <View style={styles.inputWrapper}>
//                 <MaterialIcons
//                   name="email"
//                   size={20}
//                   color="#e26512"
//                   style={styles.inputIcon}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder={language === "telugu" ? "ఇమెయిల్" : "Email"}
//                   placeholderTextColor="#999"
//                   keyboardType="email-address"
//                   value={email}
//                   onChangeText={setEmail}
//                 />
//               </View>

//               <View style={styles.inputWrapper}>
//                 <MaterialIcons
//                   name="lock-outline"
//                   size={20}
//                   color="#e26512"
//                   style={styles.inputIcon}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder={language === "telugu" ? "పాస్వర్డ్" : "Password"}
//                   placeholderTextColor="#999"
//                   secureTextEntry
//                   value={password}
//                   onChangeText={setPassword}
//                 />
//               </View>

//               {/* Sign In/Up Button */}
//               <TouchableOpacity
//                 style={[
//                   styles.authButton,
//                   (!email || !password) && styles.authButtonDisabled,
//                 ]}
//                 disabled={!email || !password}
//                 onPress={handleAuth}
//               >
//                 <Text style={styles.authButtonText}>
//                   {isLogin
//                     ? language === "telugu"
//                       ? "సైన్ ఇన్"
//                       : "Sign In"
//                     : language === "telugu"
//                     ? "సైన్ అప్"
//                     : "Sign Up"}
//                 </Text>
//               </TouchableOpacity>

//               {/* Google Sign-In */}
//               <TouchableOpacity
//                 style={styles.googleButton}
//                 onPress={handleGoogleSignIn}
//               >
//                 <FontAwesome name="google" size={20} color="#e26512" />
//                 <Text style={styles.googleText}>
//                   {language === "telugu"
//                     ? "Google తో కొనసాగించండి"
//                     : "Continue with Google"}
//                 </Text>
//               </TouchableOpacity>

//               {/* Policy Text */}
//               <Text style={styles.policyText}>
//                 {language === "telugu"
//                   ? "లాగిన్ చేసేటప్పుడు, మీరు మా గోప్యతా విధానాలు మరియు సేవా నిబంధనలను అంగీకరిస్తారు."
//                   : "By continuing, you agree to our Privacy Policy and Terms of Service."}
//               </Text>
//             </Animated.View>
//           </ScrollView>
//         </KeyboardAvoidingView>
//       </LinearGradient>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   gradientBackground: { flex: 1, justifyContent: "center" },
//   scrollContent: { flexGrow: 1, justifyContent: "center", padding: 25 },

//   // Corner Decorative Shapes
//   cornerShape: {
//     position: "absolute",
//     width: 120,
//     height: 120,
//     borderRadius: 80,
//     backgroundColor: "rgba(226, 101, 18, 0.15)",
//   },
//   topLeft: { top: -40, left: -40 },
//   topRight: { top: -50, right: -50 },
//   bottomLeft: { bottom: -50, left: -50 },
//   bottomRight: { bottom: -60, right: -60 },

//   logoContainer: { alignItems: "center", marginBottom: 40 },
//   logoCircle: {
//     width: 200,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: "#fff",
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: 2,
//     borderColor: "#e26512",
//     shadowColor: "#e26512",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 6,
//     elevation: 8,
//     marginBottom: 15,
//   },
//   logoImage: {
//     width: 180,
//     height: 85,
//     borderRadius: 50,
//   },
//   tagline: {
//     fontSize: 14,
//     color: "#555",
//     textAlign: "center",
//     marginTop: 5,
//   },
//   formContainer: {
//     backgroundColor: "rgba(255,255,255,0.9)",
//     borderRadius: 25,
//     padding: 25,
//     shadowColor: "#000",
//     shadowOpacity: 0.15,
//     shadowRadius: 12,
//     elevation: 6,
//   },
//   header: { alignItems: "center", marginBottom: 25 },
//   title: { fontSize: 24, fontWeight: "700", color: "#333" },
//   inputWrapper: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#f9f9f9",
//     borderRadius: 15,
//     borderWidth: 1,
//     borderColor: "#eee",
//     paddingHorizontal: 15,
//     marginBottom: 15,
//   },
//   inputIcon: { marginRight: 10 },
//   input: { flex: 1, paddingVertical: 15, fontSize: 16 },
//   authButton: {
//     backgroundColor: "#e26512",
//     paddingVertical: 15,
//     borderRadius: 15,
//     alignItems: "center",
//     marginTop: 10,
//   },
//   authButtonDisabled: { backgroundColor: "#f0b38a" },
//   authButtonText: { color: "#fff", fontWeight: "700", fontSize: 16 },

//   // Google Button
//   googleButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     borderWidth: 1,
//     borderColor: "#e26512",
//     borderRadius: 15,
//     paddingVertical: 12,
//     marginTop: 15,
//   },
//   googleText: {
//     color: "#e26512",
//     fontWeight: "600",
//     fontSize: 15,
//     marginLeft: 10,
//   },

//   // Policy Text
//   policyText: {
//     fontSize: 12,
//     color: "#666",
//     textAlign: "center",
//     marginTop: 20,
//     lineHeight: 18,
//   },
// });

// export default LoginScreen;

  // const [isLogin, setIsLogin] = useState(true);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [username, setUsername] = useState("");
  // const [showPassword, setShowPassword] = useState(false);

  
  import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Animated,
  SafeAreaView,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { width: screenWidth } = Dimensions.get("window");

const LoginScreen = ({ onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [language, setLanguage] = useState("english");

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
  };

  const handleTermsConditions = () => {
    console.log("Terms & Conditions clicked");
  };

  const toggleLanguage = () => {
    setLanguage(language === "english" ? "telugu" : "english");
  };

  // Language specific icons
  const getLanguageIcon = () => {
    return language === "english" ? "language" : "translate";
  };

  const getLoginIcon = () => {
    return isLogin ? "login" : "person-add";
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={{ uri: "https://images.pexels.com/photos/16061328/pexels-photo-16061328.jpeg" }}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["rgba(26, 26, 46, 0.7)", "rgba(22, 33, 62, 0.7)", "rgba(15, 52, 96, 0.7)"]}
          style={styles.gradientBackground}
        >
          <KeyboardAvoidingView
            style={styles.contentContainer}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <ScrollView 
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollContent}
            >
              <Animated.View 
                style={[
                  styles.formContainer,
                  { 
                    opacity: fadeAnim,
                    transform: [{ translateY: slideAnim }]
                  }
                ]}
              >
                {/* Language Toggle - Compact Version */}
                <View style={styles.languageToggleContainer}>
                  <Pressable 
                    style={[styles.languageToggleButton, language === "english" && styles.activeToggle]}
                    onPress={toggleLanguage}
                  >
                    <View style={styles.toggleContent}>
                      <MaterialIcons 
                        name={getLanguageIcon()} 
                        size={14} 
                        color={language === "english" ? "#fff" : "#ffffffff"} 
                        style={styles.toggleIcon}
                      />
                      <Text style={[styles.toggleText, language === "english" && styles.activeToggleText]}>
                        {language === "english" ? "English" : "తెలుగు"}
                      </Text>
                    </View>
                  </Pressable>
                </View>

                {/* Login/Register Toggle - Compact Version */}
                <View style={styles.toggleContainer}>
                  <Pressable 
                    style={[styles.toggleButton, isLogin && styles.activeToggle]}
                    onPress={() => setIsLogin(true)}
                  >
                    <View style={styles.toggleContent}>
                      <MaterialIcons 
                        name="login" 
                        size={14} 
                        color={isLogin ? "#fff" : "#ffffffff"} 
                        style={styles.toggleIcon}
                      />
                      <Text style={[styles.toggleText, isLogin && styles.activeToggleText]}>
                        {language === "telugu" ? "లాగిన్" : "Login"}
                      </Text>
                    </View>
                  </Pressable>
                  <Pressable 
                    style={[styles.toggleButton, !isLogin && styles.activeToggle]}
                    onPress={() => setIsLogin(false)}
                  >
                    <View style={styles.toggleContent}>
                      <MaterialIcons 
                        name="person-add" 
                        size={14} 
                        color={!isLogin ? "#fff" : "#ffffffff"} 
                        style={styles.toggleIcon}
                      />
                      <Text style={[styles.toggleText, !isLogin && styles.activeToggleText]}>
                        {language === "telugu" ? "రిజిస్టర్" : "Register"}
                      </Text>
                    </View>
                  </Pressable>
                </View>

                {!isLogin && (
                  <View style={styles.inputContainer}>
                    <MaterialIcons name="person" size={18} color="#ffffffff" />
                    <TextInput
                      style={styles.input}
                      placeholder={language === "telugu" ? "వాడుకరి పేరు" : "Username"}
                      placeholderTextColor="#ffffffff"
                      value={username}
                      onChangeText={setUsername}
                    />
                  </View>
                )}

                <View style={styles.inputContainer}>
                  <MaterialIcons name="email" size={18} color="#fff" />
                  <TextInput
                    style={styles.input}
                    placeholder={language === "telugu" ? "ఇమెయిల్" : "Email"}
                    placeholderTextColor="#fbfbfbff"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <MaterialIcons name="lock" size={18} color="#fff" />
                  <TextInput
                    style={styles.input}
                    placeholder={language === "telugu" ? "పాస్వర్డ్" : "Password"}
                    placeholderTextColor="#ffffffff"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                  />
                  <Pressable onPress={() => setShowPassword(!showPassword)}>
                    <MaterialIcons 
                      name={showPassword ? "visibility" : "visibility-off"} 
                      size={18} 
                      color="#ffffffff" 
                    />
                  </Pressable>
                </View>

                {isLogin && (
                  <TouchableOpacity 
                    style={styles.forgotPassword}
                    onPress={handleForgotPassword}
                  >
                    <Text style={styles.forgotPasswordText}>
                      {language === "telugu" ? "పాస్వర్డ్ మర్చిపోయారా?" : "Forgot Password?"}
                    </Text>
                  </TouchableOpacity>
                )}

                <TouchableOpacity 
                  style={styles.primaryButton}
                  onPress={() => onLoginSuccess()}
                >
                  <LinearGradient
                    colors={["#e94560", "#e23e5a"]}
                    style={styles.buttonGradient}
                  >
                    <Text style={styles.buttonText}>
                      {isLogin 
                        ? (language === "telugu" ? "లాగిన్" : "Login")
                        : (language === "telugu" ? "రిజిస్టర్" : "Register")
                      }
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>

                <View style={styles.dividerContainer}>
                  <View style={styles.divider} />
                  <Text style={styles.dividerText}>OR</Text>
                  <View style={styles.divider} />
                </View>

                <TouchableOpacity style={styles.socialButton}>
                  <Image
                    source={{ uri: "https://developers.google.com/identity/images/g-logo.png" }}
                    style={styles.googleIcon}
                  />
                  <Text style={styles.socialButtonText}>
                    {language === "telugu" ? "Google తో కొనసాగించండి" : "Continue with Google"}
                  </Text>
                </TouchableOpacity>

                {!isLogin && (
                  <View style={styles.termsContainer}>
                    <Text style={styles.termsText}>
                      {language === "telugu" 
                        ? "రిజిస్టర్ చేస్తున్నప్పుడు, మీరు మా "
                        : "By registering, you agree to our "
                      }
                      <Text 
                        style={styles.termsLink} 
                        onPress={handleTermsConditions}
                      >
                        {language === "telugu" ? "షరతులు మరియు విధానాలు" : "Terms and Conditions"}
                      </Text>
                      {language === "telugu" ? " ని అంగీకరిస్తున్నారు" : ""}
                    </Text>
                  </View>
                )}
              </Animated.View>
            </ScrollView>
          </KeyboardAvoidingView>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 20,
    padding: 20,
    backdropFilter: "blur(10px)",
    width: screenWidth * 0.9, // Constrain form width for better centering
    maxWidth: 400, // Maximum width for larger screens
  },
  languageToggleContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 8,
    padding: 2,
    marginBottom: 15,
    alignSelf: "center",
    width: "60%",
  },
  languageToggleButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 6,
  },
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 8,
    padding: 2,
    marginBottom: 25,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 6,
  },
  activeToggle: {
    backgroundColor: "#e94560",
  },
  toggleContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  toggleIcon: {
    marginRight: 4,
  },
  toggleText: {
    color: "#ffffffff",
    fontSize: 14,
    fontWeight: "600",
  },
  activeToggleText: {
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  input: {
    flex: 1,
    color: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 15,
  },
  forgotPasswordText: {
    color: "#e94560",
    fontSize: 14,
    fontWeight: "600",
  },
  primaryButton: {
    marginTop: 10,
    borderRadius: 12,
    overflow: "hidden",
  },
  buttonGradient: {
    paddingVertical: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  dividerText: {
    color: "#f9f9f9ff",
    paddingHorizontal: 10,
    fontSize: 14,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4285F4",
    padding: 15,
    borderRadius: 12,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  termsContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  termsText: {
    color: "#ccc",
    fontSize: 12,
    textAlign: "center",
    lineHeight: 18,
  },
  termsLink: {
    color: "#e94560",
    fontWeight: "700",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;