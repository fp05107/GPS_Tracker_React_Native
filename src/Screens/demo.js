import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const App = () => {
  const [state, setState] = useState({
    pickupCords: {
      latitude: 30.7046,
      longitude: 76.7179,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    droplocationCors: {
      latitude: 30.7333,
      longitude: 76.7794,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });

  const {pickupCords, droplocationCors} = state;

  return (
    <View style={styles.container}>
      <MapView style={StyleSheet.absoluteFill} initialRegion={pickupCords} />
      <Marker coordinate={pickupCords} />
      <Marker coordinate={droplocationCors} />
      <MapViewDirections
        origin={pickupCords}
        destination={droplocationCors}
        apikey={GOOGLE_MAPS_APIKEY} //need to generate api key
        strokeWidth={3}
        strokeColor="hotpink"
        optimizeWaypoints={true}
        onReady={result => {
          mapRef.current.fitToCoordinates(result.coordinates, {
            edgePadding: {
              right: 30,
              bottom: 300,
              left: 30,
              top: 100,
            },
          });
        }}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
