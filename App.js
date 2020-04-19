import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Card from './components/Card';
import FirstScreen from './components/FirstScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <FirstScreen
      />
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
  text_input: {
    height: 40,
    width: 100,
    borderColor: 'gray',
    borderWidth: 1
  },
});
