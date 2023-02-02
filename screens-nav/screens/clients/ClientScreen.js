import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';


const ClientScreen = ({ navigation }) => {
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

export default ClientScreen;