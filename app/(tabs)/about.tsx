import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, ScrollView, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function InfoCard({ title, description, icon }) {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={30} color="#ffffff" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardText}>{description}</Text>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <ImageBackground
      source={require('../../assets/images/recycle.png')} 
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Welcome to BinBuddy</Text>

          <InfoCard
            title="About BinBuddy"
            description="BinBuddy is a local King County application dedicated to serving your recycling needs."
            icon="information-circle-outline"
          />

          <InfoCard
            title="How to Scan Items"
            description="Use our in-app camera to scan barcodes. BinBuddy will determine whether the item is recyclable or not."
            icon="camera-outline"
          />

          <InfoCard
            title="Meet the Developers"
            description={`Team Lead: Jessica Swoap\nAPI Team: Bo Pan & Udita Gupta\nDatabase: Elissa Ryan & Kyle Wang\nApp Dev: Mathew Tran & Megan Oh`}
            icon="people-outline"
          />
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    paddingVertical: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  container: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Arial',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    width: '100%',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    borderLeftWidth: 5,
    borderLeftColor: '#7DA24A',
  },
  iconContainer: {
    marginRight: 20,
    backgroundColor: '#7DA24A',
    borderRadius: 50,
    padding: 10,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#39424e',
    marginBottom: 5,
    fontFamily: 'Arial',
  },
  cardText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    fontFamily: 'Arial',
  },
});
