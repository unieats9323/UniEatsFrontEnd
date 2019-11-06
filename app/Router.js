import { createStackNavigator } from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation';


import Restaurants from './containers/Restaurants/Restaurants'
import Menu from './containers/Menu/Menu'
import Cart from './containers/Cart/Cart'

const Router = createStackNavigator({
    Cart: {screen:  Cart},
    Home: {screen: Restaurants},
    Menu: {screen: Menu},
}, {
    inialRouteName: "Menu"
});

const AppContainer = createAppContainer(Router)

export default AppContainer;