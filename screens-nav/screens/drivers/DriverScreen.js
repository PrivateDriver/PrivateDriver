import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


function DriverScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <Button
        title="Events"
        onPress={() => navigation.navigate('Events')}
      />
      
      <Button
        title="Clients"
        onPress={() => navigation.navigate('Clients')}
      />
      
      <Button
        title="Vehicles"
        onPress={() => navigation.navigate('Vehicles')}
      />

      <Button
        title="Chat"
        onPress={() => navigation.navigate('Chat')}
      />

      <Button
        title="Map"
        onPress={() => navigation.navigate('Map')}
      />

     
    </View>
  );
}

export default DriverScreen;