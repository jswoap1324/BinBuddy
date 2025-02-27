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
  "Recycling one aluminum can saves enough energy to power a TV for 3 hours!",
  "Only 9% of all plastic ever made has been recycled.",
  "Cardboard can be recycled up to seven times before the fibers become too weak.",
  "Americans throw away enough plastic straws each year to wrap around the Earth 2.5 times.",
  "Every day, the US produces enough trash to fill 63,000 garbage trucks.",
  "Producing recycled paper uses 64% less energy than making paper from raw materials.",
  "One ton of recycled plastic saves 5,774 kWh of energy, 16.3 barrels of oil, and 30 cubic yards of landfill space.",
  "Styrofoam takes over 500 years to decompose in landfills.",
  "Up to 80% of ocean plastic pollution comes from land-based sources.",
  "Using reusable water bottles instead of disposable ones can save an average of 167 plastic bottles per person per year.",
  "Only about 30% of recyclable materials in the US actually get recycled.",
  "E-waste is the fastest-growing waste stream in the world, with only 20% being recycled properly.",
  "The energy saved from recycling one glass bottle can power a computer for 25 minutes.",
  "It takes 700 years for a plastic bag to decompose in a landfill.",
  "Recycling steel cans saves 74% of the energy used to produce them from raw materials.",
  "Over 75% of waste is recyclable, but only about 30% is actually recycled.",
  "Using recycled aluminum requires 95% less energy than producing new aluminum.",
  "Every ton of recycled glass saves over 1,300 pounds of sand.",
  "The average person generates over 4.4 pounds of trash per day.",
  "Plastic straws and utensils are among the top 10 items found in ocean cleanups.",
  "Paper can take up to six weeks to decompose in a landfill, while plastic can take over 500 years.",
  "Producing one ton of new aluminum creates 10 times more carbon emissions than recycling it.",
  "Food waste in landfills generates methane, a greenhouse gas 25 times more potent than CO₂.",
  "Recycling one ton of steel saves 2,500 pounds of iron ore and 1,400 pounds of coal.",
  "Each year, over 1 billion trees worth of paper are thrown away in the US.",
  "About 1 trillion plastic bags are used worldwide each year, but less than 1% are recycled.",
  "Nearly 80% of plastic waste ever created still exists somewhere in the environment today.",
  "Recycling reduces water pollution by 35% compared to making products from raw materials."
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

