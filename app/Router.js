import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation';


import Restaurants from './containers/Restaurants/Restaurants'
import Menu from './containers/Menu/Menu'
import Cart from './containers/Cart/Cart'
import ProfileSwitcher from './containers/ProfileSwitcher'
import TestScreen from "./containers/testScreen";
const Router = createStackNavigator({
<<<<<<< HEAD
    Profile: {screen: ProfileSwitcher},
    BottomNavigation : {screen: TestScreen},
    Cart: {screen: Cart},
=======
    //Cart: {screen:  Cart},
>>>>>>> 461031ee54a58d8401edb56ad383d3d27bc1a0cd
    Home: {screen: Restaurants},
    Menu: {screen: Menu},
}, {
    inialRouteName: "Menu"
});

const AppContainer = createAppContainer(Router)

export default AppContainer;