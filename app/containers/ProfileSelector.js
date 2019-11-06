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
import { Menu } from './Menu'
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class ProfileSelector extends Component {
    render() {
        return(  
            <View>
                <Text>hello</Text>
                <TouchableOpacity   onPress={() => this.props.navigation.navigate('Restaurants')}>
                    <Image
                        style={styles.image}
                        source={{uri:'https://images.pexels.com/photos/262896/pexels-photo-262896.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}>                            
                    </Image>
                    <View style={styles.details}>
                        <Text>Order</Text>                        
                    </View> 
                </TouchableOpacity>   
            </View>

        );
    }
}

const styles = StyleSheet.create({
    images: {
        width: 100,
        height: 100
    }
})