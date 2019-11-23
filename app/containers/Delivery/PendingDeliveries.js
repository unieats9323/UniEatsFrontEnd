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
    
    componentDidMount(){
        services.getDeliveryDetails("").then(response => {
            this.setState({
                data: response
            })
        })            
    }
    
    _renderItem = ({item}) => (
        <PendingDeliveryItem
          dishes={item.dishes}
          pickupLocation={item.pickup_location}
          totalCost={item.total_cost}
          dropLocation={item.location}
          navigation={this.props.navigation}
        />
      )

    _keyExtractor = (item, index) => item.order_id;

    render() {
        return (
            <View style={styles.container}>
                {/* <View style= {styles.header}>
                    <Text style={styles.title}>Discover 
                    Restaurants</Text>
                    <Icon style={styles.search} name="search"/>
                </View> */}
            
                <FlatList 
                    data={this.state.data.pending_orders}
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