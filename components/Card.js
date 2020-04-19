import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Card extends Component{
  render(){
  return (
    <View style={styles.container}>
      <Image
          source={{
          uri: 'https://imagehost.imageupload.net/2020/04/16/img_burger3x.png',
          }}
          style={styles.imagine} />
      <View style={styles.miniView}>
         <Image
          source={{
          uri: 'https://imagehost.imageupload.net/2020/04/16/plate_icon.png',
          }}
          style={styles.icon} />
         <Text style={{ fontSize: 10, marginLeft: 10 }}>Open now - Closing Soon</Text>
         <Image
             source={{
             uri: 'https://imagehost.imageupload.net/2020/04/16/starsce5a84710a8df3e2.png',
             }}
             style={styles.stars} />
         <Text style={{ color: 'blue', alignItems: 'center', justifyContent: 'center', marginLeft: 5, fontSize: 10 }}>301</Text>
      </View>
      <Text style={styles.titlu}>{this.props.title}</Text>
      <Text style={styles.subtitlu}>{this.props.subtitle}</Text>
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    width: 320,
    height: 280,
    marginLeft: 10,
    marginTop: 10,
  },
  titlu: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  subtitlu: {
    marginLeft: 10,
    fontSize: 13,
  },
  imagine: {
    flex: 1,
    width: 320,
    height: 200,
    marginTop: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  miniView:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stars: {
    width: 80,
    height: 15,
    marginLeft: 20,
  },
  icon: {
    width: 40,
    height: 36,
    marginLeft: 10,
    marginTop: -20,
  },
});
