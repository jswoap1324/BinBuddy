// THIS IS THE START PAGE 

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link, useRouter } from "expo-router";

export default function Start() {
    const router = useRouter()
  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <Text style={[styles.title, {fontFamily: 'BebasNeue'}]}>BinBuddy</Text>
            <Text style={[styles.subtitle, {fontFamily: 'OpenSans'}]}>Recycle right, BinBuddy's insight</Text>
        </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.startButton} onPress={() => router.replace("/(tabs)")}>
          <Text style = {[styles.startButtonText, {fontFamily: 'OpenSans'}]}>Start</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    button: {
        fontSize: 30,
        textDecorationLine: "underline",
        color: "#fff",
      },
  container: {
    flex: 1,
    backgroundColor:"#7DA24A",
    //'#e9f0e0'// Light desaturated green
    padding: 20,
    },
    content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  title: {
    fontSize: 100,
    fontWeight: 'bold',
    color: '#e9f0e0', // Dark green
    marginBottom: 10,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 20,
    color: '#e9f0e0',
    marginBottom: 30,
    textAlign: 'center',
    lineHeight: 24,
  },
  buttonContainer:{
    paddingBottom: 40,
    // marginHorizontal: 35,
      alignItems: 'center'
  },
  startButton: {
    backgroundColor: '#fbfaf6', // Off-white/light beige
    paddingVertical: 15,
    paddingHorizontal: 130,
    borderRadius: 35,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5, // For Android shadow effect
  },
  startButtonText: {
    fontSize: 20,
    color: '#7DA24A', // Dark green
    fontWeight: 'bold',
  },
});




