import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function Drivers({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <Button
        title="Events"
        onPress={() => navigation.navigate('Events')}
      />
      
      <Button
        title="Drivers"
        onPress={() => navigation.navigate('Drivers')}
      />
      
      <Button
        title="Clients"
        onPress={() => navigation.navigate('Clients')}
      />
      
      <Button
        title="Vehicles"
        onPress={() => navigation.navigate('Vehicles')}
      />
    </View>
  );
}

export default Drivers;