import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    x,
    FlatList,
    Button
} from 'react-native'
import DishItem from './DishItem';
import services from 'library/services/services';



export default class DeliveryDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            order : this.props.navigation.state.params.order
        }
    }


    componentDidMount(){
        console.log('Order details +++++ ',this.state.order);
        var jsonData;
        jsonData = DeliveryDetails.getJsonData(this.state.order);
        services.acceptOrders(jsonData)
    }

    static getJsonData(order) {
        return JSON.stringify({User_Id : order.User_Id,
        Order_Id : order.Order_Id})
    }

    _renderItem = ({item}) => (
        console.log('order +++++ ',item),
        <DishItem
          name={item.Dish_Name}
          price={item.Rate}
          specialNotes={item.Quantity}
          navigation={this.props.navigation}
        />
      );

    _keyExtractor = (item, index) => item.id;

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={this.state.order.Dishes}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />

                <View>
                        <Button
                            position="absolute"
                            color="green"
                            title="Delivered"
                            onPress={() => this.deliveryComplete(this.state.order.Order_Id)}Order_Id
                        />
                </View>
           
            </View>            
        );        
    }

    deliveryComplete = function(id){
        services.delivered(id)
        this.props.navigation.navigate('OrderConfirmation', {text: "THANKS FOR COMPLETING THE ORDER"})
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'column',
      //alignItems: 'center',
      backgroundColor: '#FEC102',
    },
    button: {
        position: 'absolute',
        bottom:0
      }
});