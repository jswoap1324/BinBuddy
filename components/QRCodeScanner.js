import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {Html5QrcodeScanner} from "html5-qrcode";

const QRCodeScanner = () => {
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const scannerRef = useRef(null); 

  useEffect(() => {
    if (scanning && !scannerRef.current) {
      const config = {
        fps: 10,
        qrbox: 250,
      };
      scannerRef.current = new Html5QrcodeScanner(
        'qr-reader', 
        config,
        false
      );
      scannerRef.current.render(onScanSuccess);
    }

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().then(() => {
          scannerRef.current = null;
        });
      }
    };
  }, [scanning]);

  const onScanSuccess = (decodedText, decodedResult) => {
    setScanResult(decodedText);
    setScanning(false); // Stop scanning after successful scan
    scannerRef.current.clear(); // Stop the camera and reset the scanner
  };

  const startScan = () => {
    setScanning(true);
    setScanResult(null);
  };

  const stopScan = () => {
    setScanning(false);
    if (scannerRef.current) {
      scannerRef.current.clear();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>QR Code Scanner</Text>
      <View id="qr-reader" style={styles.qrScannerContainer}></View>
      {scanResult && <Text>Scanned Result: {scanResult}</Text>}
      {!scanning ? (
        <Button title="Start Scanning" onPress={startScan} />
      ) : (
        <Button title="Stop Scanning" onPress={stopScan} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  qrScannerContainer: {
    width: '100%',
    height: 300,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 20,
  },
});

export default QRCodeScanner;
