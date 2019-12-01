/* Price design component */

import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View, 
    FlatList
} from 'react-native'



export default class Price extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.primary}>{this.getDollar(this.props.price)}</Text>
                <Text style={styles.secondary}>{this.getCent(this.props.price)}</Text>
            </View>
           
        );
    }

    getDollar(price){
        price = (price+"").split(".")
        dollar = price[0] + ""
        return dollar
    }

    getCent(price){
        price = (price+"").split(".")
        cent = "00"
        if (price[1]) {
            cent = price[1] + ""
        }
        return cent
    }
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10
    },
    primary: {
        fontSize: 25,
        //paddingLeft: 15,
        //paddingRight: 15,
        //paddingTop: 25,
        //paddingBottom: 10,
        //alignSelf: 'center',
        fontWeight: '500',
        fontFamily: 'System',
        letterSpacing: 3,
        textTransform: 'uppercase',
        color: 'black',
        //marginTop: 10,
        // flex:1
    },
    secondary: {
        fontSize: 15,
        //paddingLeft: 15,
        paddingRight: 15,
        //paddingTop: 25,
        //paddingBottom: 10,
        alignSelf: 'flex-start',
        fontWeight: '500',
        fontFamily: 'System',
        letterSpacing: 1,
        textTransform: 'uppercase',
        color: 'black',
        //marginTop: 10,
        //flex:1
    }
});