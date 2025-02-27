import React from "react";
import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from 'expo-font'; 

export default function Index() {
  const navigation = useNavigation();
  
  let [fontsLoaded] = useFonts({
    'OpenSans': require('../../assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <LinearGradient
      colors={['#ffffff', '#A9D08E']} 
      style={styles.container}
    >
      <Image
        source={require("../../assets/images/BinBuddy_transparent-.png")}
        style={styles.logo}
      />

      <Text style={styles.subtitle}>
        Manage your waste better, one scan at a time.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("scan")}>
        <Text style={styles.buttonText}>Start Scanning</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  subtitle: {
    fontSize: 18,
    color: "#39424e",
    textAlign: "center",
    fontFamily: "OpenSans", 
  
  },
  button: {
    backgroundColor: "#7DA24A",
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    // textTransform: "uppercase",
    letterSpacing: 1.2,
    fontFamily: "OpenSans-Bold",
  },
});
