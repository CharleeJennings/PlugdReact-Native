import React from 'react';
import {View ,Text} from 'react-native';
import { Header , Icon , ListItem, List } from 'react-native-elements';




export default class Reservation extends React.Component
{

	static navigationOptions = {
		header : null
	};




	render ()
	{
		const {params} = this.props.navigation.state;



		return( 

			<View>
			<Header centerComponent={{text: 'Reservations'}}/>
			<Text> Hello </Text>
			</View>);
	}
}


const list = [];