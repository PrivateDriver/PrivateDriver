import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://limo-app-server.loca.lt/vehicles.json')
      .then((res) => res.json())
      .then((data) => {
        setData((s) => ([...s, ...data]));
      })
      .catch((error) => {
        console.error(error)
      });
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>PrivateDriver.io</Text>
      {data.map(v =>
        <View key={v["id"]}>
          <Text style={styles.text}>Vehicle</Text>
          <Text style={{
            margin: 10,
            fontSize: 16
          }}>{'Make ' + v["make"]}</Text>
          <Text style={{
            margin: 10,
            fontSize: 16
          }}>{'Model ' + v['model']}</Text>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  )
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#888',
    fontSize: 28,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "gray",
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});
