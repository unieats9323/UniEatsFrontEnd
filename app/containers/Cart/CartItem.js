import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text, 
} from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import colors from 'assets/colors'
import Price from 'library/components/Price'
 
export default class CartItem extends Component {

    getPrice(rate, qty) {
        // return zero in case of exception
        return rate*qty
    }
    render() {
        return(  
            <View style={styles.card}>
                <View style={styles.details}>
                    <View style={styles.firstRow}>
                        <Text style={styles.title}>{this.props.name}</Text>                         
                    </View>          
                    <View style={styles.secondRow}>
                        <Text style={styles.rate}>{this.props.price} x {this.props.Quantity}</Text>
                        <Price 
                            price={this.getPrice(this.props.price, this.props.Quantity)}
                            primaryColor={colors.app_yellow}
                            secondaryColor={colors.app_yellow}
                            style={styles.price}/>
                    </View>
                </View>
            </View>     
        );
    }
}


const styles = StyleSheet.create({
    card: {
        margin: 20,
        marginBottom: 0,
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 20,
        flexDirection: 'row',
        flex: 1
    },
    image: {
        width: '100%',
        height: 50,
        paddingTop: '100%',
        //position: 'relative',
        alignItems: 'center',
        flex: 1
    },
    details: {
        //position: 'absolute',
        width: '90%',
        height: 200,       
        alignSelf: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)',
        bottom: 15,
        margin:5,
        borderRadius: 20,
        overflow: 'hidden',
        flexDirection: 'column',
        flex: 2
    },
    firstRow: {
        flex: 2,
        flexDirection: 'column'
    },
    secondRow: {
        flex: 2,
        flexDirection: 'row'
    },
    title: {
        fontSize: 25,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 25,
        paddingBottom: 10,
        //alignSelf: 'center',
        fontWeight: '300',
        fontFamily: 'System',
        letterSpacing: 7,
        textTransform: 'uppercase',
        color: colors.app_yellow,
        //marginTop: 10,
        flex:2
    },
    rate:{
        fontSize: 20,
        paddingLeft: 15,
        paddingRight: 15,
        fontWeight: '300',
        fontFamily: 'System',
        //alignSelf: 'flex-start',
        letterSpacing: 3,
        color: 'white',
        flex: 3
    },

    price: {
        fontSize: 30,
        paddingLeft: 15,
        paddingRight: 15,
        //paddingTop: 25,
        paddingBottom: 10,
        alignSelf: 'center',
        fontWeight: '600',
        fontFamily: 'System',
        letterSpacing: 7,
        textTransform: 'uppercase',
        color: colors.app_yellow,
        alignSelf: 'flex-end',
        //marginTop: 10,
        flex:1
    },
    type: {
        fontSize: 15,
        paddingLeft: 15,
        paddingRight: 15,
        fontWeight: '300',
        fontFamily: 'System',
        alignSelf: 'center',
        letterSpacing: 3,
        color: 'white',
    }  
});
