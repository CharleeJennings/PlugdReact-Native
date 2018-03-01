import React, {Component} from 'react';
import { Animated,  Text, View, Image, FlatList, StyleSheet } from 'react-native';
import Launchscreen from './Launchscreen.js';
import {Header, Icon, ListItem, List} from 'react-native-elements';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import Reservation from './Reservation_screen.js';


 class Homepage extends Component
{

	static navigationOptions = {

    drawerLabel: 'Homepage'

	};

renderRow(rowData, sectionID)
{
  return (<ListItem
        key={i}
        title={rowData.title}
        leftIcon={{name: rowData.icon}}
        onPress= {() => this.props.navigation.navigate('Reserve' , {})}
        containerStyle = {styles.items}
      />)
}
	
render()
{
	return(

		<View>
		
		<Header leftComponent= {{ icon: 'menu' , onPress : () => this.props.navigation.navigate('DrawerToggle')}} centerComponent={{ text: 'Home' }}/>
    <List>
		<ListView renderRow={this.renderRow} dataSource={this.state.dataSource}/>
    </List>

  </View>
		  );
}

}





 const mainStack = StackNavigator({
  

  Home : {

    screen: Homepage
  },
  Reserve: {

    screen: Reservation
  },
},

{
  headerMode: 'none'
}


);

export default mainStack;

const list = [
  {
    title: 'Order for Take-Out',
    icon: 'av-timer'
  },
  {
    title: 'Reservation',
    icon: 'flight-takeoff'
  },
  {
    title: 'View Order'

  },
  {
    title: 'View Deals and Events'
  },
  {
    title : 'View Favorites'
  },
  {
    title: 'Search Veneues'
  },
  {
    title: 'View Loyality Rewards'
  }
 
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
  items:
  {
    height: 300,
  }

})


