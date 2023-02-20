import { Button, View, Text, SafeAreaView } from 'react-native';


function DriverScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <View>
      <Text>Driver</Text>
      </View>

      <SafeAreaView>
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

      </SafeAreaView>

     
    </View>
  );
}

export default DriverScreen;