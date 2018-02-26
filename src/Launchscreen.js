import React from 'react';
import { Animated, StyleSheet, Text, View, Image } from 'react-native';
import {StackNavigatior} from 'react-native';





export default class LaunchScreen extends React.Component
{
		state = {
			fadeAmin: new Animated.Value(100),
		}

		componentDidMount()
		{
			Animated.timing( this.state.fadeAmin, {

				toValue : 0,
				duration: 5000,
			}).start();
			this.props.navigation.navigate('Home');

		}


	render()
	{
		let {fadeAmin} = this.state;

		return(
			<Animated.View style={{...this.props.style, opacity: fadeAmin, }}>
			<Image source = { require ('../splash_screen.png')} style={ {height: 850 ,width: 400, position: 'absolute', top : 0 } }/>
			</Animated.View>
			);
	}
}


const style = StyleSheet.create({



});