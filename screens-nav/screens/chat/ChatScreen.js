import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';


const ChatScreen = () => {
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

      <Button
        title="Map"
        onPress={() => navigation.navigate('Map')}
      />

      
    </View>
  );
};

export default ChatScreen;
  


