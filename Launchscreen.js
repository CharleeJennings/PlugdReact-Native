import React from 'react';
import { Animated, StyleSheet, Text, View, Image } from 'react-native';





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
		}


	render()
	{
		let {fadeAmin} = this.state;

		return(
			<Animated.View style={{...this.props.style, opacity: fadeAmin,}}>
			<Image source = { require ('./splash_screen.png')} style={ {height: 700 ,width: 600} }/>
			</Animated.View>
			);
	}
}
