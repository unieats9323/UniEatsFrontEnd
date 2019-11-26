import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text, 
    Button,
    TouchableOpacity
} from 'react-native'
import { Card, Icon, Rating} from 'react-native-elements'
import { Menu } from '../Menu/Menu'
import { PendingDeliveryDetail } from './DeliveryDetails'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import colors from 'assets/colors'
import Price from 'library/components/Price'


export default class PendingDeliveryItem extends Component {

    navigateToScreen(dishes) {
        this.props.navigation.navigate('DeliveryDetails', { dishes })
    }
    
    render() {
        return(  
            <View>
                {/* Details */}
                    <View style={styles.innerDetails}>
                        <Text style={styles.title}>{"Restaurant"}</Text>
                        <Text style={styles.subtitle}>{this.props.restaurantName}</Text>
                        <Text style={styles.title}>{"PICKUP"}</Text>
                        <Text style={styles.subtitle}>{this.props.pickupLocation}</Text>
                        <Text style={styles.title}>{"DROP"}</Text> 
                        <Text style={styles.subtitle}>{this.props.dropLocation}</Text>
                            <View style={styles.lastRow}>
                                <View style={styles.priceContainer}>
                                    <Text style={styles.primary}>{this.props.totalCost}</Text>
                                    <Text style={styles.secondary}>00</Text>
                                </View>

                                <View style={styles.button}>
                                    <Button
                                    color="black"
                                    title="ACCEPT"
                                    style={[{
                                        fontSize: 500,
                                        fontWeight: "bold"
                                    }]}
                                    onPress={() => this.props.navigation.navigate('DeliveryDetails',{order : this.props.order})}
                                    />
                                </View>
                            </View> 

                    </View>                          
                {/* Button */}
              
            </View>
            
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
    title: {
        fontSize: 12,
        paddingLeft: 10,
        paddingTop: 10,
        fontWeight: "500",
        fontFamily: 'System',
        textTransform: 'uppercase',
        
        letterSpacing: 3,
        color: 'black',
    },
    subtitle: {
        fontSize: 25,
        paddingLeft: 10,
        paddingBottom: 10,
        fontWeight: '600',
        fontFamily: 'System',
        textTransform: 'uppercase',

        letterSpacing: 3,
        color: 'black',
    },     



       
    priceContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },
    primary: {
        fontSize: 40,
        fontWeight: '500',
        fontFamily: 'System',
        letterSpacing: 3,
        textTransform: 'uppercase',
        color: 'black',
    },
    secondary: {
        fontSize: 25, 
        paddingRight: 15,
        alignSelf: 'flex-start',
        fontWeight: '500',
        fontFamily: 'System',
        letterSpacing: 1,
        textTransform: 'uppercase',
        color: 'black',
       
    },
    lastRow: { 
     
        flexDirection: 'row'
    },
    button: {
        flex: 1,
        alignSelf: "flex-end",
        backgroundColor: "#63A563",
        margin: 10
    }

    
    
});

const price_styles = StyleSheet.create({
   
});
