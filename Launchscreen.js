import React from 'react';
import { StyleSheet, Text, Vie, Image } from 'react-native';



export default class LaunchScreen extends React.Component
{
	render()
	{
		return(
			<Image source = { require ('./splash_screen.png')} style={ {height: 700 ,width: 600} }/>
			);
	}
}
