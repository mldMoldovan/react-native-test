import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class SecondScreen extends Component{
  render(){
  return (
    <View style={styles.container}>
      <Text>Buna Ziua</Text>
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
});
