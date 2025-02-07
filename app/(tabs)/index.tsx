import { Link } from "expo-router";
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Index() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
    {/* Logo in the Top Left */}
    {/* <Image
      source={require('../assets/images/32B397.png')} // Replace with your logo URL
      style={styles.logo}
    /> */}
    {/* Welcome Text */}
    <Text style={[styles.title, {fontFamily: 'BebasNeue'}]}>Welcome to BinBuddy!</Text>
    <Text style={[styles.subtitle, {fontFamily: 'OpenSans'}]}>
      Manage your waste better, one scan at a time.
    </Text>
    <View style={styles.searchContainer}>
      <TextInput
         style={styles.searchBar}
         placeholder="Search for items"
        placeholderTextColor="gray"
      />
       {/* <Link href="/scan" asChild> */}
       <TouchableOpacity style={styles.scanButton} onPress={() => navigation.navigate('scan')}>
        <Ionicons name="scan" size={24} color="#53783e"/>
       </TouchableOpacity>
       {/* </Link> */}
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      backgroundColor: '#e9f0e0',
    },
    logo: {
      position: "absolute",
      top: 40, // Distance from the top
      left: 20, // Distance from the left
      width: 75, // Logo width
      height: 75, // Logo height
      borderRadius: 50, // Rounded logo
        backgroundColor: "transparent",
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
        marginBottom: 20
    },
     searchBar: {
      flex: 1,
      backgroundColor: '#fbfaf6',
      padding: 10,
        borderRadius: 10,
      marginRight: 10,
       color: 'black'
     },
      scanButton: {
        backgroundColor: '#fbfaf6',
      padding: 10,
        borderRadius: 10,
    },
    title: {
      fontSize: 38,
      fontWeight: "bold",
      color: "#53783e",
      textAlign: "center",
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 20,
      color: "black",
      textAlign: "center",
      marginBottom: 30,
      lineHeight: 24,
    },
      button: {
      backgroundColor: '#fbfaf6',
      paddingVertical: 15,
          paddingHorizontal: 120,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      elevation: 5,
    },
    buttonText: {
      fontSize: 20,
      color: '#53783e',
      fontWeight: "bold",
    },
  });
