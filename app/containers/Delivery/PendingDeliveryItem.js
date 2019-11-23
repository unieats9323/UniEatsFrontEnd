import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text, 
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native'
import { Card, Icon, Rating} from 'react-native-elements'
import { Menu } from '../Menu/Menu'
import { PendingDeliveryDetail } from './DeliveryDetails'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import colors from 'assets/colors'

export default class PendingDeliveryItem extends Component {

    navigateToScreen(dishes) {
        this.props.navigation.navigate('DeliveryDetails', { dishes })
    }
    
    render() {
        return(  
            <TouchableOpacity style={styles.card} key={this.props.order_id}  onPress={() => this.navigateToScreen(this.props.dishes)}>
                    <View style={styles.innerDetails}>
                        <Text style={styles.title}>{"Pickup Location"}</Text>
                        <Text style={styles.subtitle}>{this.props.pickupLocation}</Text>   
                        <Text style={styles.title}>{"Drop Location"}</Text> 
                        <Text style={styles.subtitle}>{this.props.dropLocation}</Text>
                        <Text style={styles.title}>{"Total cost"}</Text>                 
                        <Text style={styles.subtitle}>{"$" + this.props.totalCost}</Text>                    
                    </View>                          
            </TouchableOpacity>    
        );
    }
}

const styles = StyleSheet.create({
    card: {
        margin: 10,
        marginBottom: 0,
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 20,
        backgroundColor:'white'
    },
    image: {
        width: '100%',
        padding:'50%',
        position: 'relative',
        alignItems: 'center'
    },
    details: {
        position: 'relative',
        width: '100%',
        height: '100%',       
        alignSelf: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)',
        bottom: 15,
        margin:5,
        borderRadius: 20,
        overflow: 'hidden',
        flexDirection: 'row'
    },
    innerDetails: {
        margin: 10,
        position:'relative',
        flex: 1,
        backgroundColor:'white',
        justifyContent: 'center'

    },
    subtitle: {
        fontSize: 15,
        paddingLeft: 16,
        paddingRight: 0,
        paddingTop: 10,
        paddingBottom: 20,
        fontWeight: '300',
        fontFamily: 'System',
        letterSpacing: 3,
        color: 'black',
    }  ,
    title: {
        fontSize: 12,
        paddingLeft: 8,
        paddingRight: 0,
        fontWeight: 'bold',
        fontFamily: 'System',
        textTransform: 'uppercase',
        letterSpacing: 3,
        color: 'black',
    }  
});
