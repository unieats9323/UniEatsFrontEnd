import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View, 
    FlatList
} from 'react-native'

import RestaurantItem from '../Restaurants/RestaurantItem';
import services from 'library/services/services';
import CartItem from './CartItem';
import store from '../../store/store'

const cart = store.getState().cart;

export default class Cart extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount(){
    }
    
    _renderItem = ({item}) => (
        <CartItem
            restaurant={item.restaurant}
            name={item.name}
            image={item.image}
            price={item.price}
            qty={item.qty}
            navigation={this.props.navigation}
        />
      )

    _keyExtractor = (item, index) => item.id;

    render() {
        console.log(cart)

        return (
            <View style={styles.container}>      
                <FlatList               
                    data={cart.menu}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />       
        </View>         
        );        
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'column',
      //alignItems: 'center',
      //backgroundColor: '#FEC102',
    },
    header: {
        flexDirection: 'row'
    },
    title: {
        flex:1,
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        padding: 10,
        margin: 10,
    },
    search: {
        padding: 10,
        margin: 50
    }
});