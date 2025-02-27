import React from "react";
import { Text, StyleSheet, TouchableOpacity, Image, View } from "react-native";
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

  // List of fun facts about recycling
  const funFacts = [
    "Recycling one ton of paper saves 17 trees and 7,000 gallons of water!",
    "Aluminum cans can be recycled and back on store shelves in just 60 days!",
    "Glass bottles take 1 million years to decompose in landfills.",
    "Recycling one plastic bottle saves enough energy to power a lightbulb for 4 hours.",
    "The US throws away 25 million plastic bottles every hour!",
    "Composting food waste reduces methane emissions and improves soil health.",
    "Recycling one aluminum can saves enough energy to power a TV for 3 hours!"
  ];

  // Select a fun fact based on the current date
  const getDailyFunFact = () => {
    const today = new Date().getDate(); // Get the day of the month (1-31)
    return funFacts[today % funFacts.length]; // Rotate facts daily
  };

  return (
    <LinearGradient
      colors={['#A9D08E','#ffffff']} 
      style={styles.container}
    >
      <Image
        source={require("../../assets/images/BinBuddy_transparent-.png")}
        style={styles.logo}
      />

      <Text style={styles.subtitle}>
        Manage your waste better, one scan at a time.
      </Text>

      {/* Daily Fun Fact Section */}
      <View style={styles.funFactContainer}>
        <Text style={styles.funFactTitle}>♻️ Did You Know? ♻️</Text>
        <Text style={styles.funFactText}>{getDailyFunFact()}</Text>
      </View>

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
  funFactContainer: {
    marginTop: 20,
    backgroundColor: "#E6F4D8",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  funFactTitle: {
    fontSize: 16,
    fontFamily: "OpenSans-Bold",
    color: "#4A7023",
    marginBottom: 5,
  },
  funFactText: {
    fontSize: 14,
    fontFamily: "OpenSans",
    color: "#39424e",
    textAlign: "center",
    paddingHorizontal: 10,
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
    letterSpacing: 1.2,
  },
});

