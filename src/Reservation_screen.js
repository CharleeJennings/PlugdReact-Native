import React from 'react';
import {View ,Text} from 'react-native';
import { Header , Icon , ListItem, List } from 'react-native-elements';




export default class Reservation extends React.Component
{

	static navigationOptions = {
	};




	render ()
	{
		const {params} = this.props.navigation.state;



		return( 

			<View>
			<Header centerComponent={{text: 'Businesses'}} leftComponent= {{ icon: 'chevron-left', onPress: () => this.props.navigation.goBack()}} />
			<Text> Hello </Text>
			</View>);
	}
}


const list = [];