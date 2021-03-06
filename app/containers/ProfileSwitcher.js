import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import {Icon} from 'react-native-elements'
import { PendingDeliveries } from '../containers/Delivery/PendingDeliveries'
//import { TouchableOpacity } from 'react-native-gesture-handler';


export default class ProfileSwitcher extends Component {

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.button}>
                    <TouchableOpacity  style={styles.icon}  onPress={() => this.props.navigation.navigate('Home')}>
                        <Image style={styles.iconImage} rounded source={require('assets/img/order_food.jpeg')} ></Image>                         
                    </TouchableOpacity>
                    <Text style={styles.title}>ORDER</Text>
                </View>
                <View style={styles.button}> 
                    <TouchableOpacity  style={styles.icon} onPress={() => this.props.navigation.navigate('PendingDeliveries')}>
                   
                        <Image style={styles.iconImage} rounded source={require('assets/img/deliver_food.jpeg')} ></Image>
                    </TouchableOpacity>                   
                    <Text style={styles.title}>DELIVER</Text>
                </View>
               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,        
        flexDirection: "column",
    },
    button: {
        flex: 1,
        alignSelf: 'center',
        flexDirection: "column",
    },
    icon: {
        flex:3,
    },
    iconImage: {
        borderRadius: 100,
        overflow: 'hidden',
        alignSelf: "center",
        width: 200,
        height: 200,  
    },
    title: {
        flex: 1, 
        paddingTop: 50,
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: 'center',
    }
})

