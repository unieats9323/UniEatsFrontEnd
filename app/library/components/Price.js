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
                <Text style={styles.primary}>{this.props.price}</Text>
                <Text style={styles.secondary}>99</Text>
            </View>
           
        );
    }
 
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
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
        color: '#FEC102',
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
        color: '#FEC102',
        //marginTop: 10,
        //flex:1
    }
});