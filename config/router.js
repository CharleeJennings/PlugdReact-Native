import Homepage from '../src/Homepage.js';
import {StackNavigator} from 'react-navigation';
import Reservation from '../src/Reservation_screen.js';
import React from 'react';
import Launchscreen from '../src/Launchscreen.js'


const RootStack =  StackNavigator({

	Splash : 
	{
		screen : Launchscreen
	},

	Home : {

		screen: Homepage
	},
	Reserve: {

		screen: Reservation
	},

},
	{
    	initialRouteName: 'Splash',
  }

);

 export default class Stack extends React.Component 
{
	render()
	{
		return <RootStack/>;

	}
}