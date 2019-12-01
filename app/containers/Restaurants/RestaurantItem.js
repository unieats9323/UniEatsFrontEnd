/* React component for Restaurant card */

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
import { createStackNavigator, createAppContainer } from 'react-navigation';
import colors from 'assets/colors'
 
export default class RestaurantItem extends Component {

    render() {
        return(

            <TouchableOpacity style={styles.card} key={this.props.id}  onPress={() => this.props.navigation.navigate('Menu' , {restaurant : this.props.restaurant})}>
                <Image
                    style={styles.image}
                    source={{uri: this.props.image}}>                            
                </Image>
                <View style={styles.details}>
                    <View style={styles.innerDetails}>
                        <Text style={styles.title}>{this.props.name}</Text>                   
                        <Text style={styles.type}>{this.props.type}</Text> 
                    </View>                          
                </View> 
            </TouchableOpacity>    
        );
    }
}

const styles = StyleSheet.create({
    card: {
        margin: 20,
        marginBottom: 0,
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 20
    },
    image: {
        width: '100%',
        paddingTop: '100%',
        position: 'relative',
        alignItems: 'center'
    },
    details: {
        position: 'absolute',
        width: '90%',
        height: 150,       
        alignSelf: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)',
        bottom: 15,
        margin:5,
        borderRadius: 20,
        overflow: 'hidden',
        flexDirection: 'row'
    },
    innerDetails: {
        margin: 15,
        flex: 1,
        justifyContent: 'center'

    },
    title: {
        fontSize: 25,
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
        //marginTop: 10,
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
