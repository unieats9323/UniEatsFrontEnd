/*
Menu Screen UI
*/

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    VirtualizedList,
    Button
} from 'react-native'

import MenuItem from './MenuItem';
import services from '../../library/services/services'
import {Icon} from 'react-native-elements'
import {ScrollView} from 'react-native-gesture-handler';
import colors from 'assets/colors'



export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
                restaurant: this.props.navigation.state.params.restaurant,
                menu: []
        }
    }

    componentDidMount() {
        // console.log('++++++ Payload',this.state.data.restaurant);
        services.getMenu(this.state.restaurant.Restaurant_Id).then(response => {
            this.setState({
                menu : response

            });
        })
    }

    _renderItem = ({item}) => (
        <MenuItem
            dishId={item.Dish_Id}
            name={item.Dish_Name}
            image={item.Image_Url}
            price={item.Price}
        />
    );

    _keyExtractor = (item, index) => item.id;

    render() {
        return (
            <ScrollView>
                <View style={styles.card}>
                    <Image
                        style={styles.image}
                        source={{uri: this.state.restaurant.Image_URL}}>
                    </Image>
                    <View style={styles.details}>
                        <View style={styles.innerDetails}>
                            <Text style={styles.title}>{this.state.restaurant.Restaurant_Name}</Text>
                            <Text style={styles.type}>{this.state.restaurant.Summary}</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.menuHeading}> MENU</Text>
                {this.state.menu.map((item, index) => {
                    return (
                        <MenuItem
                            item={item}
                            dishId={item.Dish_Id}
                            name={item.Dish_Name}
                            image={item.Image_Url}
                            price={item.Price}
                        />
                    )
                })}

            <View styles={styles.button} style={[{ width: "40%", margin: 10, backgroundColor: "#FEC102" }]}>

            <Button
                color="black"
                title="CART"
                onPress={() => this.props.navigation.navigate('Cart', {restaurant : this.state.restaurant.Restaurant_Id})}
                />
            </View>  

                { /*<ScrollView
                    data={this.state.data.menu}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />*/  }
            </ScrollView>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#FAFAFA',
    },
    header: {
        flexDirection: 'row'
    },
    menuHeading: {
        paddingTop: 20,
        paddingBottom: 0,
        paddingLeft: 40,
        fontSize: 30,
        fontWeight: 'bold'
    },
    search: {
        padding: 10,
        margin: 50
    },
    card: {
        margin: 0,
        marginBottom: 0,
        borderRadius: 0,
        overflow: 'hidden',
        elevation: 20
    },
    image: {
        width: '100%',
        paddingBottom: "50%",
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
        margin: 5,
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
        color: '#FEC102',
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
    },
    button: {        
        flex: 1,
        paddingBottom: 20,
        backgroundColor: colors.app_yellow,
      
        alignSelf: 'flex-end'
    }
});