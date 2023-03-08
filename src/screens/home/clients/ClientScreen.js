import React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';


const ClientScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <Text>Client</Text>
      </View>

      <SafeAreaView>
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

      </SafeAreaView>
      
    </View>
  );
}

export default ClientScreen;