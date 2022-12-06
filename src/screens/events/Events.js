import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function Events({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Events</Text>
      <Button
        title="Drivers"
        onPress={() => navigation.navigate('Drivers')}
      />
    </View>
  );
}

export default Events;