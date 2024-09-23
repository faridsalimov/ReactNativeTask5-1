import "@expo/metro-runtime";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Pressable,
} from "react-native";
import * as Font from "expo-font";

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
        "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.forumContainer}>
        <Text style={styles.title}>Log In</Text>

        <TextInput style={styles.input} placeholder="Email" />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputWithButton}
            placeholder="Password"
            secureTextEntry={!showPassword}
          />
          <Pressable
            style={styles.showButton}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text style={styles.showText}>
              {showPassword ? "Hide" : "Show"}
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Pressable style={styles.loginButton}>
          <Text style={styles.loginText}>Log In</Text>
        </Pressable>
        <Pressable style={styles.forgotButton}>
          <Text style={styles.forgotText}>Forgot your password?</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  forumContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    paddingTop: 50,
    paddingBottom: 40,
    fontFamily: "Inter-Bold",
  },
  input: {
    height: 40,
    backgroundColor: "#f6f6f6",
    borderColor: "#eeeeee",
    placeholderTextColor: "#c4c4c4",
    borderWidth: 1,
    paddingHorizontal: 10,
    width: "90%",
    borderRadius: 8,
    fontFamily: "Inter-Regular",
    marginBottom: 16,
  },
  passwordContainer: {
    width: "90%",
    position: "relative",
  },
  inputWithButton: {
    height: 40,
    backgroundColor: "#f6f6f6",
    borderColor: "#eeeeee",
    placeholderTextColor: "#c4c4c4",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontFamily: "Inter-Regular",
  },
  showButton: {
    position: "absolute",
    right: 14,
    top: 12,
  },
  showText: {
    color: "#5db075",
    fontFamily: "Inter-Regular",
  },
  footerContainer: {
    padding: 20,
    width: "100%",
  },
  loginButton: {
    backgroundColor: "#5db075",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Inter-Bold",
  },
  forgotButton: {
    alignItems: "center",
    paddingTop: 15,
  },
  forgotText: {
    color: "#5db075",
    fontFamily: "Inter-Bold",
  },
});
