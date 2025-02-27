import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Dimensions, Image, ActivityIndicator } from "react-native";
import { CameraView, Camera } from "expo-camera";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [backendResponse, setBackendResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const handleBarcodeScanned = async ({ data }) => {
    setScanned(true);
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500)); 
    try {
        const response = await fetch(`https://binbuddy-36i3.onrender.com/api/classify/${data}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });

        if (!response.ok) {
            throw new Error("Failed to fetch data from server");
        }

        const result = await response.json();
        setBackendResponse(result);
    } catch (error) {
        console.error("Error fetching data:", error);
        setBackendResponse({ error: "Failed to fetch data from server" });
    } finally {
        setLoading(false);
    }
};


  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {!scanned && (<>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["upc_a", "ean13", "itf14", "code93", "code39", "code128"],
        }}
        style={StyleSheet.absoluteFillObject}
      />
    <View style={styles.overlay}>
        <View style={styles.topOverlay}/>
        <Image source={require("../../assets/images/barcode-scan.png")} 
          style={styles.barcodeIcon} />
        <View style={styles.middleContainer}>
          <View style={styles.sideOverlay} />
          <View style={styles.cutout}/>
          <View style={styles.sideOverlay} />
        </View>
        <View style={styles.bottomOverlay} />
        <Text style={styles.instructionText}>
    Point your mobile phone towards the barcode to scan
    </Text>
      </View>
     </>
      )}
    {scanned && loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#53783e" />
          <Text style={styles.loadingText}>Processing...</Text>
        </View>
      )}

      {scanned && !loading && backendResponse && (
      <View style={styles.scannedDataContainer}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{JSON.stringify(backendResponse, null, 2)}</Text>
        </View>
      <Button title={"Tap to Scan Again"} onPress={() => {setScanned(false); setBackendResponse(null);}} color={"#7DA24A"} />
    </View>
      )}
    </View>
  );
}

const { width, height } = Dimensions.get("window");
const cutoutWidth = width * 0.7;
const cutoutHeight = height * 0.2;

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#e9f0e0", 
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
     barcodeIcon: {
        position: "absolute",
        top: cutoutHeight,
        alignSelf: "center",
        width: 150, 
        height: 150 , 
        tintColor: "white",
      },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: "center",
      alignItems: "center",
    },
    topOverlay: {
      position: "absolute",
      top: 0,
      width: "100%",
      height: (height - cutoutHeight) / 2,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    bottomOverlay: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: (height - cutoutHeight) / 2,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    middleContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    sideOverlay: {
      width: (width - cutoutWidth) / 2,
      height: cutoutHeight,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    cutout: {
      width: cutoutWidth,
      height: cutoutHeight,
      borderColor: "#fff",
      borderWidth: 5,
      backgroundColor: "transparent",
    },
    text: {
      fontSize: 30,
      color: "#53783e",
      textAlign: "center",
      marginBottom: 10,
    },
    scannedDataContainer: {
      position: "absolute",
      top: "40%",
      left: 0,
      right: 0,
      alignItems: "center",
      padding: 20,
      borderRadius: 10,
    },
    scannedDataText: {
      color: "#53783e",
      fontSize: 25,
      marginBottom: 10,
    },
    instructionText: {
      position: "absolute",
      top: (height + cutoutHeight) / 2 + 50, 
      left: 20, 
      right: 20,
      textAlign: "center",
      fontSize: 30,
      color: "#fff",
      paddingVertical: 10, 
      paddingHorizontal: 60,
      zIndex: 10,
    },
    loadingContainer: { 
      position: "absolute", 
      top: "40%", 
      left: 0, 
      right: 0, 
      alignItems: "center" },
    loadingText: { 
      marginTop: 10, 
      fontSize: 18, 
      color: "#53783e" 
    },
    resultContainer: { 
      position: "absolute", 
      top: "30%", 
      left: 20, 
      right: 20, 
      backgroundColor: "rgba(0, 0, 0, 0.7)", 
      padding: 20, 
      borderRadius: 10 
    },
    resultText: { 
      color: "#53783e", 
      fontSize: 25, 
      marginBottom: 10 
    },
  });
