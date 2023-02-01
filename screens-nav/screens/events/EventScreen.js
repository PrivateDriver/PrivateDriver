import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

const EventScreen = ({ navigation }) => {
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
        title="Chat"
        onPress={() => navigation.navigate('Chat')}
      />

      <Button
        title="Map"
        onPress={() => navigation.navigate('Map')}
      />

      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}



export default EventScreen;

