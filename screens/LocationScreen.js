import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, ActivityIndicator, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const BACKEND_URL = 'http://10.0.0.2:3000/api/location';

const LocationScreen = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const sendLocationToBackend = async (coords) => {
    try {
      await fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          latitude: coords.latitude,
          longitude: coords.longitude,
        }),
      });
      Alert.alert('✅', 'Localização enviada ao servidor');
    } catch (error) {
      Alert.alert('Erro ao enviar localização');
      console.error(error);
    }
  };

  const requestLocationPermission = async () => {
    setLoading(true);
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão negada');
        setLoading(false);
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync();
      setLocation(currentLocation.coords);

      sendLocationToBackend(currentLocation.coords);
    } catch (error) {
      Alert.alert('Erro ao obter localização');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Você está aqui"
          />
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: Dimensions.get('window').width, height: Dimensions.get('window').height },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default LocationScreen;
