import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Stack from './config/router.js';
import Launchscreen from './src/Launchscreen.js';
import mainStack from './src/Homepage.js';



export default class App extends React.Component {
  render() {

    return (

      <View>
         <Stack/>
      </View>

            
    );
  }
}
