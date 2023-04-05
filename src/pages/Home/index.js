import React, { useState, useEffect, useCallback } from 'react';
import GetLocation from 'react-native-get-location';
import {
  PermissionsAndroid,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

export function Home() {
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const getCurrentLocation = useCallback(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 6000,
    })
      .then((location) => {
        if (location.latitude !== latitude || location.longitude !== longitude) {
          setLatitude(location.latitude);
          setLongitude(location.longitude);
        }
      })
      .catch((error) => {
        const { code, message } = error;
        console.warn(code, message);
      });
  }, [latitude, longitude]);

  useEffect(() => {
    async function verifyLocationPermission() {
      const granted = await requestLocationPermission();
      console.log(granted, '=> Permission');
      setPermissionGranted(granted);
    }
    verifyLocationPermission();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(getCurrentLocation, 5000);
    return () => clearInterval(intervalId);
  }, [getCurrentLocation]);

  async function requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Example App',
          message: 'Example App access to your location ',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
    }
  }

  const handleButtonPress = useCallback(() => {
    requestLocationPermission();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.localiza}>latitude: {latitude}</Text>
        <Text style={styles.localiza}>longitude: {longitude}</Text>
      </View>
      <TouchableOpacity style={styles.Button} onPress={handleButtonPress}>
        <Text style={styles.text}>Obter Localização</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2b2b2b',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#f9f9f9',
    marginHorizontal:10,
    borderRadius:16,
    padding: 20,
    marginBottom:20,
  },
  Button: {
    alignItems: 'center',
    backgroundColor: '#00BFFF',
    marginHorizontal: 90,
    padding: 20,
  },
  Texto: {
    color: '#ffffff',
    fontSize: 20,
  },
  localiza:{
    color:'#000'
  }
});
