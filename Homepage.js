import React from 'react';
import { Animated,  Text, View, Image } from 'react-native';
import Launchscreen from './Launchscreen.js';
import {Header} from 'react-native-elements';
import {StackNavigator} from 'react-navigation';


export default class HomePage extends React.Component
{

render()
{
	return (
	
			<Header leftComponent = {{ icon : 'menu', color : '#fff'}} centerComponent = {{ text: "Plugd" }}/>
		);
}

}


