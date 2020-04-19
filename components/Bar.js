import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import Card from './Card';


export default class Bar extends Component{
  render(){
  return (
    <View style={styles.container}>
       <Text style={styles.titlu}>{this.props.title}</Text>
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    height: 30,
    justifyContent: 'center',
    marginTop: 10,
  },
  titlu: {
    fontWeight: 'bold',
    marginLeft: 30,
    color: 'gray',
  },
});
