/***
 *This file contains the information of all the screen.
 * more like the manifest file in Android.
 * All the navigation between screen happens via Router.js
 * This file also has the router information about the bottom navigation bar.
 **/
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation';


import Restaurants from './containers/Restaurants/Restaurants'
import Menu from './containers/Menu/Menu'
import ProfileSwitcher from './containers/ProfileSwitcher'
import PendingDeliveries from './containers/Delivery/PendingDeliveries'
import DeliveryDetails from './containers/Delivery/DeliveryDetails'
import Rewards from './containers/Delivery/Rewards'
import Cart from './containers/Cart/Cart'
import OrderConfirmation from './containers/Confirmation/OrderConfirmation'

import { createBottomTabNavigator } from 'react-navigation-tabs'

const Router = createStackNavigator({
    Profile: {screen: ProfileSwitcher},
    Home: {screen: Restaurants},
    Menu: {screen: Menu},
    PendingDeliveries: {screen: PendingDeliveries},
    DeliveryDetails: {screen: DeliveryDetails},
    Rewards:{screen: Rewards}
}, {
    inialRouteName: "Menu"
});

const HomeTab = createStackNavigator({
    Home: {screen: Restaurants},
    Menu: {screen: Menu},
    Cart: {screen: Cart},
    PendingDeliveries: {screen: PendingDeliveries},
    DeliveryDetails: {screen: DeliveryDetails},
    OrderConfirmation: {screen: OrderConfirmation},
})

const ProfileTab = createStackNavigator({
    
    Profile: {screen: ProfileSwitcher},
    //Home: {screen: Restaurants},

   // PendingDeliveries: {screen: PendingDeliveries}

})

const CartTab = createStackNavigator({
    Cart: {screen: Cart},
        PendingDeliveries: {screen: PendingDeliveries},

})

const TabNavigator = createBottomTabNavigator({
    Profile: ProfileTab,
    Home: HomeTab
  });

const AppContainer = createAppContainer(TabNavigator)

export default AppContainer;