import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableOpacity, Image
} from 'react-native'
import {Card, Icon, Rating} from 'react-native-elements'
import {Menu} from '../Menu/Menu'
import {PendingDeliveryDetail} from './DeliveryDetails'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import colors from 'assets/colors'
import Price from 'library/components/Price'


export default class Rewards extends Component {

    render() {
        return (
            <View>
                <Image source={require('assets/img/rewards-1.jpg')} ></Image>
                <Text>Please make it look beautiful</Text>
                <Button title={'Start Over?'} onPress={() => this.props.navigation.navigate('Profile')}/>
            </View>
        )
    }

}