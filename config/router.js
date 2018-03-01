import mainStack from '../src/Homepage.js';
import {StackNavigator , DrawerNavigator} from 'react-navigation';
import React from 'react';
import Menu from '../src/Menu.js';
import { Text } from 'react-native';



const SideBar = DrawerNavigator(
{
	Account: {
		screen : mainStack
	},
	

},
	{
		initialRouteName: 'Account',
		drawerPosition: 'left',
		contentComponent: props => <Menu/>
	}

)


 export default class Stack extends React.Component 
{
	render()
	{
		return <SideBar/>;

	}
}