import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation';


import Restaurants from './containers/Restaurants/Restaurants'
import Menu from './containers/Menu/Menu'
import ProfileSwitcher from './containers/ProfileSwitcher'
import PendingDeliveries from './containers/Delivery/PendingDeliveries'
import DeliveryDetails from './containers/Delivery/DeliveryDetails'
//import createBottomTabNavigator from './containers/BottomNavigation/BottomNavigation';

import { createBottomTabNavigator } from 'react-navigation-tabs'

const Router = createStackNavigator({
    Profile: {screen: ProfileSwitcher},
    Home: {screen: Restaurants},
    Menu: {screen: Menu},
    PendingDeliveries: {screen: PendingDeliveries},
    DeliveryDetails: {screen: DeliveryDetails}
}, {
    inialRouteName: "Menu"
});

const HomeTab = createStackNavigator({
    Home: {screen: Restaurants},
    Menu: {screen: Menu},
})

const ProfileTab = createStackNavigator({
    Profile: {screen: ProfileSwitcher},
})

const TabNavigator = createBottomTabNavigator({
    Profile: ProfileTab,
    Home: HomeTab    
  });

const AppContainer = createAppContainer(TabNavigator)

export default AppContainer;