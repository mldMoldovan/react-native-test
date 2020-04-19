import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, Button } from 'react-native';
import Card from './Card';
import Bar from './Bar';
import { SearchBar } from 'react-native-elements';


export default class FirstScreen extends Component {

  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render(){
  const { search } = this.state;
  return (
    <View>
       <ScrollView style={styles.scrollView}>
       <SearchBar
        placeholder="Search"
        onChangeText={this.updateSearch}
        value={search}
        round={true}
        lightTheme={true}
        />
        <Bar title="FOR YOU"/>
        <ScrollView horizontal={true}>
           <Card title="Burger Shack" subtitle="Snacks - Food - Burgers"/>
           <Card title="Burger Nebunia" subtitle="Snacks - Food - Burgers"/>
        </ScrollView>
        <Bar title="POPULAR RIGHT NOW"/>
        <ScrollView horizontal={true}>
           <Card title="Burger Emperor" subtitle="Snacks - Food - Burgers"/>
           <Card title="Burger Forza" subtitle="Snacks - Food - Burgers"/>
        </ScrollView>
        <Bar title="HEALTHY HANGOVER"/>
        <ScrollView horizontal={true}>
           <Card title="Burger La Baiatu" subtitle="Snacks - Food - Burgers"/>
           <Card title="Burger Talent" subtitle="Snacks - Food - Burgers"/>
        </ScrollView>
        </ScrollView>
    <ScrollView horizontal={true} style={{marginLeft: 130, marginBottom: 20}}>
       <Button title="Delivery"/>
       <Button title="Pick-Up"/>
    </ScrollView>
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
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    width: '100%',
    marginTop: 30,
  },
});
