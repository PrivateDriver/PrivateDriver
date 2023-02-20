import React from 'react';
import { Button, View, Text,  SafeAreaView } from 'react-native';

const EventScreen = ({ navigation }) => {
  return (

    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <View>
      <Text>Event</Text>
      </View>

      <SafeAreaView>
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
      
      </SafeAreaView>

      
    </View>
  );
}



export default EventScreen;

