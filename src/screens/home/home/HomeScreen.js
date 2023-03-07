import React from 'react';
import { Button, View, SafeAreaView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
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

      <Button
        title="LogIn Screen"
        onPress={() => navigation.navigate('Login')}
      />
      
      </SafeAreaView>

      
    </View>
  );
}

export default HomeScreen;
