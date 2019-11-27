
import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View, 
    FlatList,
    Button
} from 'react-native'
import { connect } from 'react-redux'
import RestaurantItem from '../Restaurants/RestaurantItem';
import services from 'library/services/services';
import CartItem from './CartItem';
import store from 'store/Store'
import colors from 'assets/colors'


export default class Cart extends Component {
    
    constructor(props) {
       
        cart = store.getState().menu;

        super(props);
       
        this.state = {
        
        }
    }
    componentDidMount(){
        console.log(this.props.navigation.state.params.restaurant)
    }

   
    _renderItem = ({item}) => (
        <CartItem
            restaurant={item.restaurant}
            name={item.Dish_Name}
            image={item.Image_Url}
            price={item.Price}
            Quantity={item.Quantity}
            navigation={this.props.navigation}
        />
      )

    _keyExtractor = (item, index) => item.id;

    render() {
        return (
            <View style={styles.container}>      
                <FlatList               
                    data={cart.cart_items}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                /> 
            <View styles={styles.button} style={[{ width: "100%", margin: 10, backgroundColor: "#FEC102" }]}>

            <Button
                color="black"
                title="CONFIRM ORDER"
                onPress={() => this.confirmOrder(cart, this.props.navigation.state.params.restaurant)}
                />
            </View>       
        </View>         
        );        
    }

    confirmOrder(cart, restaurant){
        console.log(restaurant)
        order = services.processOrders(cart, restaurant)
        text = "YOUR ORDER IS CONFRIMED"
        this.props.navigation.navigate('OrderConfirmation', {text: text})
        //console.log(cart)
    
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
    },
    button: {       
        flex: 1,
        paddingBottom: 20,
        backgroundColor: colors.app_yellow,
      
        alignSelf: 'flex-end'
    }
});



