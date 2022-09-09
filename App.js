import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class App extends React.Component {
  state = {
    data: {'activity': 'Loading...'}
  }

  getJsonData = () => {
    fetch('http://localhost:3000/vehicles.json',
    {method: "GET"}).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({
        data: responseJson
      })
    })
    .catch((error) => {
      console.error(error)
    });
  }

  componentDidMount = () => {
    this.getJsonData()
  };

  render() {
    return (
      <View style={styles.container}>
      
        <Text style={styles.text}>PrivateDriver.io</Text>
          <View>
            <Text style={styles.text}>Vehicle</Text>
            <Text style={{margin:10, fontSize:16}}>{'Make ' + this.state.data['make']}</Text>
            <Text style={{margin:10, fontSize:16}}>{'Model ' + this.state.data['model']}</Text>
          </View>
        <TouchableOpacity
          onPress={(data) => alert((this.state.data['make']))}
          style={styles.button}>
          <Text style={styles.buttonText}>Get Data</Text>
        </TouchableOpacity>
  
        <StatusBar style="auto" />
      </View>
    );
  }
}

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
