import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Geolocation from '@react-native-community/geolocation';


export default function App() {
 
 let [latitude, setLatitude] = useState(0);
 let [longitude, setLongitude] = useState(0);
 let [country, setCountry] = useState('');

 let openCage = ()=>{
  

  fetch(url)
  .then((response) => {
    return response.json()
  })
  .then((json) => {
  console.log(json);    
  setCountry(json.results[0].components.country);
  });
};  

let locateCountry = () =>{
  let url = 'https://api.opencagedata.com/geocode/v1/json?key=44a9f29b61514c1bb30d4781d418d6f3&q=' +
  latitude + 
  '+' +
  longitude;
  fetch(url)
  .then((response) => {
    return response.json()
  })
  .then((json) => {
  console.log(json);    
  setCountry(json.results[0].components.country);
  });    
}

 let locateMe =() =>{
  Geolocation.getCurrentPosition(info => {
    console.log(info);
    setLatitude(info.coords.latitude);
    setLongitude(info.coords.longitude);
    locateCountry();
  });
 };

  return (
    <View style={styles.container}>
      <Text>Welcome to GPS Sensor App!</Text>
      <Button onPress={locateMe} title="Locate Me"/>
      <Text>{latitude}</Text>
      <Text>{longitude}</Text>
      <Text>{country}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
