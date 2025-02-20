import { Text, View, StyleSheet } from "react-native";
import {Html5QrcodeScanner} from "html5-qrcode";
import QRCodeScanner from '../../components/QRCodeScanner';

export default function ScanScreen() {
  return (
    <View style={styles.container}>
      <Text style = {styles.text}>Scan your item!</Text>
      <QRCodeScanner />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: "#e9f0e0", 
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 30,
    }
  });
