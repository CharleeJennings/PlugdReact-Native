import React from 'react';
import { Header } from 'react-native-elements';
import { StackNavigator , DrawerNavigator} from 'react-navigation';





export default class Account extends React.Component 
{
	render()
	{

		return (
			<Header leftComponent= {{ icon: 'menu' , onPress : () => this.props.navigation.navigate('DrawerToggle')}} centerComponent={{ text: 'Account Page' }}/>


			);

	}
}