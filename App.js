import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Stack from './config/router.js';
import Launchscreen from './src/Launchscreen.js';


export default class App extends React.Component {
  render() {

    return (
      <Stack/>

            
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
