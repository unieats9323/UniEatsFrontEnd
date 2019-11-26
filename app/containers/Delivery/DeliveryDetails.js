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

    // componentDidMount(){
    //     console.log(this.state.orderId);
    //     services.getDeliveryDetails(this.state.orderId).then(response => {
    //         this.setState({
    //             data: response
    //         })
    //     })
    // }

    _renderItem = ({item}) => (
        console.log('order +++++ ',this.state.order),
        <DishItem
          name={item.name}
          price={item.price}
          specialNotes={item.special_notes}
          navigation={this.props.navigation}
        />
      )

    _keyExtractor = (item, index) => item.id;

    render() {
        return (
            <View style={styles.container}>
            
                <FlatList 
                    data={this.props.navigation.state.params.dishes}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />

                <View>
                        <Button
                            position="absolute"
                            color="green"
                            title="YES"
                            onPress={() => this.props.navigation.goBack()}
                        />

                        <Button
                            position="absolute"
                            color="red"
                            title="NO"
                            onPress={() => this.props.navigation.goBack()}
                        />
                </View>
           
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
    button: {
        position: 'absolute',
        bottom:0
      }
});