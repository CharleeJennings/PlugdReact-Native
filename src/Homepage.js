import React, {Component} from 'react';
import { Animated,  Text, View, Image, FlatList, StyleSheet } from 'react-native';
import Launchscreen from './Launchscreen.js';
import {Header, Icon , ListItem, List} from 'react-native-elements';
import {StackNavigator} from 'react-navigation';


export default class Homepage extends Component
{

	static navigationOptions = {
		header: null
	};

	
render()
{
	return(
		<View>
		
		<Header leftComponent= {{ icon: 'menu'}} centerComponent={{ text: 'Home' }}>
	</Header>
		<List>
  {
    list.map((item, i) => (
      <ListItem
        key={i}
        title={item.title}
        leftIcon={{name: item.icon}}
        onPress= {() => this.props.navigation.navigate('Reserve')}
      />
    ))
  }
</List>
</View>
		);
}

}


const list = [
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
 
]

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  leftHeader: 
  {
  	position: 'relative',
  	flex: 1,
  	left: 30,
  }


})


