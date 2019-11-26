import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation';


import Restaurants from './containers/Restaurants/Restaurants'
import Menu from './containers/Menu/Menu'
import ProfileSwitcher from './containers/ProfileSwitcher'
import PendingDeliveries from './containers/Delivery/PendingDeliveries'
import DeliveryDetails from './containers/Delivery/DeliveryDetails'
import Rewards from './containers/Delivery/Rewards'

const Router = createStackNavigator({
    //Cart: {screen:  Cart},
    Profile: {screen: ProfileSwitcher},
    Home: {screen: Restaurants},
    Menu: {screen: Menu},
    PendingDeliveries: {screen: PendingDeliveries},
    DeliveryDetails: {screen: DeliveryDetails},
    Rewards:{screen: Rewards}
}, {
    inialRouteName: "Menu"
});

const AppContainer = createAppContainer(Router)

export default AppContainer;