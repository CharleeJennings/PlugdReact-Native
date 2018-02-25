import React from 'react';
import { AppRegistry, StyleSheet, View, Text, Image } from 'react-native';
import Homepage from './Homepage.js';



export default class App extends React.Component {
  render() {

    return (
      <View>
      <Homepage/>
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
