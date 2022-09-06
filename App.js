import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PrivateDriver.io</Text>

    <TouchableOpacity
        onPress={() => alert('Hello, Data!')}
        style={styles.button}>
        <Text style={styles.buttonText}>Get Data</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
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
