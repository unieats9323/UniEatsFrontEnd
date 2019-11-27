import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import {Icon} from 'react-native-elements'
//import { TouchableOpacity } from 'react-native-gesture-handler';


export default class OrderConfirmation extends Component {

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.button}>
                    <TouchableOpacity  style={styles.icon}  onPress={() => this.props.navigation.navigate('Home')}>
                        <Image style={styles.iconImage} rounded source={require('assets/img/order_food.jpeg')} ></Image>                         
                    </TouchableOpacity>
                    <Text style={styles.title}>{this.props.navigation.state.params.text}</Text>
                </View>
                
               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,    
       
       
    },
    button: {
        flex: 1,
        paddingTop: 50,
        alignSelf: 'center',
        flexDirection: "column",
    },
    icon: {
        flex:3,
    },
    iconImage: {
        borderRadius: 150,
        overflow: 'hidden',
        alignSelf: "center",
        width: 300,
        height: 300,  
    },
    title: {
        flex: 1, 
        paddingTop: 0,
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: 'center',
    }
})

