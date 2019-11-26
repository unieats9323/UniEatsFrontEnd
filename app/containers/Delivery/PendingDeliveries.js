import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    x,
    FlatList
} from 'react-native'
import PendingDeliveryItem from './PendingDeliveryItem';
import services from 'library/services/services';

export default class PendingDelivery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        services.getOpenOrders().then(response => {
            this.setState({
                data: response
            })
        })
    }

    _renderItem = ({item}) => (
        <PendingDeliveryItem
            order = {item}
            orderId={item.Order_Id}
            dishes={item.dishes}
            restaurantName = {item.Restaurant_name}
            pickupLocation={item.Pickup_Location}
            totalCost={item.Total_Price}
            dropLocation={item.Delivery_Location}
            navigation={this.props.navigation}
        />
    );

    _keyExtractor = (item, index) => item.order_id;

    render() {
        return (
            <View style={styles.container}>
                {/* <View style= {styles.header}>
                    <Text style={styles.title}>Discover 
                    Restaurants</Text>
                    <Icon style={styles.search} name="search"/>
                </View> */}
                <Text style={styles.title}>AVAILABLE ORDERS</Text>
                <FlatList
                    style={{
                        margin: 10,
                    }}
                    data={this.state.data.Orders}
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
        backgroundColor: '#FEC102',
    },
    header: {
        flexDirection: 'row'
    },
    title: {

        fontSize: 30,
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