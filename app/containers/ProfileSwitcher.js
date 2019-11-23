import React, {Component} from 'react';
import {
    Text,
    View,
} from 'react-native'
import {Icon} from 'react-native-elements'
import { PendingDeliveries } from '../containers/Delivery/PendingDeliveries'


export default class ProfileSwitcher extends Component {

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{justiftyContent:"center", alignItems:"center" , backgroundColor:"ffbf00"}}>
                <Icon
                    raised
                    name='heartbeat'
                    type='font-awesome'
                    color='#f50'
                    size={50}
                    onPress={() => navigate('BottomNavigation')}/>
                <Text>I'm hungry!</Text>
                <Icon
                    raised
                    name='rowing'
                    type='font-awesome'
                    color='#f50'
                    size={50}
                    onPress={() => navigate('PendingDeliveries')}/>
                <Text>I want to deliver food!</Text>
            </View>
        );
    }
}

