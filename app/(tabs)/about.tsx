import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style = {styles.text}>This is about screen.</Text>
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


  // import { Text, View,Button, StyleSheet, Pressable } from "react-native";
// import {CameraView, useCameraPermissions} from "expo-camera";


// export default function ScanScreen() {
//   // const [permission, requestPermission] = useCameraPermissions();

//   // if (!permission) {
//   //   // Camera permissions are still loading.
//   //   return <View />;
//   // }

//   // if (!permission.granted) {
//   //   // Camera permissions are not granted yet.
//   //   return (
//   //     <View style={styles.container}>
//   //       <Text style={styles.text}>We need your permission to show the camera</Text>
//   //       <Button onPress={requestPermission} title="grant permission" />
//   //     </View>
//   //   );
//   // }
  

//   return (
//     <View style={styles.container}>
//       <Text style = {styles.text}>QR Code Scanner</Text>
//        <CameraView 
//          style={StyleSheet.absoluteFillObject}
//          facing="back"
//          onBarcodeScanned={({data}) => {
//           console.log("data", data)
//        }}
//        />
//        <Overlay />
//     </View>
//   );
// }