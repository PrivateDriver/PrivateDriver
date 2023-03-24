import React, { useEffect, useState } from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';
import axios from 'axios';

const EventScreen = ({ navigation }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await axios.get(
        'https://limo-app-server.loca.lt/events'
      );
      console.log(response.data);
      setEvents(response.data);
    }
    loadData();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <Text>There are {events.length} events</Text>
      </View>

      <SafeAreaView>
        <Button
          title='Drivers'
          onPress={() => navigation.navigate('Drivers')}
        />

        <Button
          title='Clients'
          onPress={() => navigation.navigate('Clients')}
        />

        <Button
          title='Vehicles'
          onPress={() => navigation.navigate('Vehicles')}
        />
      </SafeAreaView>
    </View>
  );
};

export default EventScreen;
