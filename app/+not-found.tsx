import { Link, Stack } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{title: "Oops! Not Found Page"}}/>
    <View style={styles.container}>
      <Link href = {"/"} style = {styles.button}>
      Go back to Home Screen
      </Link>
    </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8ACE00", 
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    fontSize: 30,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
