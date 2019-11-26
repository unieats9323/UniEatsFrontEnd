import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    x,
    FlatList
} from 'react-native'

import RestaurantItem from './RestaurantItem';
import services from 'library/services/services';
import {Icon} from 'react-native-elements'


export default class Restaurants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        services.getRestaurantList("").then(response => {
            this.setState({

                data: response
            })
        })
    }

    _renderItem = ({item}) => (
        <RestaurantItem
            restaurant_id={item.Restaurant_Id}
            name={item.Restaurant_Name}
            image={item.Image_URL}
            type={item.Summary}
            location={item.Location}
            navigation={this.props.navigation}
        />
    )

    _keyExtractor = (item, index) => item.id;

    render() {
        return (
            <View style={styles.container}>
                {/* <View style= {styles.header}>
                    <Text style={styles.title}>Discover 
                    Restaurants</Text>
                    <Icon style={styles.search} name="search"/>
                </View> */}

                <FlatList
                    data={this.state.data}
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
        flex: 1,
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