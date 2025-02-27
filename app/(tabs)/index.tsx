import React from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Index() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/BinBuddy_transparent-.png")} style={styles.logo} />

      <Text style={[styles.subtitle, { fontFamily: "OpenSans" }]}>Manage your waste better, one scan at a time.</Text>
{/* 
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search for items"
          placeholderTextColor="gray"
        />
        <TouchableOpacity
          style={styles.scanButton}
          onPress={() => navigation.navigate("scan")}
        >
          <Ionicons name="scan" size={28} color="#53783e" />
        </TouchableOpacity>
      </View> */}

      {/* CTA Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("scan")}>
        <Text style={styles.buttonText}>Start Scanning</Text>
      </TouchableOpacity>
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e9f0e0", 
    
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#7DA24A",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    // padding: 10,
    marginBottom: 30,
    lineHeight: 26,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    padding: 10,
    color: "black",
  },
  scanButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#e9f0e0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  button: {
    backgroundColor: "#7DA24A",
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});
