import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View, 
    Image,
    FlatList,
    VirtualizedList
} from 'react-native'

import MenuItem from './MenuItem';
import services from '../../library/services/services'
import { Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';


export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                "restaurant": {},              
                "menu": []
            }
        }
    }
  
    componentDidMount(){
        services.getMenu("").then(response => {
            console.log(response)
            this.setState({
                data: response
            })
        })            
    }
    
    _renderItem = ({item}) => (  
        <MenuItem
          name={item.name}
          image={item.image}
          price={item.price}
        />
      )

    _keyExtractor = (item, index) => item.id;

    render() {
        console.log('hello')
        return (
            <ScrollView>
                <View style={styles.card} >
                    <Image
                        style={styles.image}
                        source={{uri: this.state.data.restaurant.image}}>                            
                    </Image>
                    <View style={styles.details}>
                        <View style={styles.innerDetails}>
                            <Text style={styles.title}>{this.state.data.restaurant.name}</Text>                   
                            <Text style={styles.type}>{this.state.data.restaurant.type}</Text> 
                        </View>                          
                    </View> 
                </View> 
                <Text style={styles.menuHeading}> MENU</Text> 
                {this.state.data.menu.map((item, index) => {
                        return (
                            <MenuItem
                            name={item.name}
                            image={item.image}
                            price={item.price}
                            item={item}
                          />
                        )
                })}
             
                    {/* <ScrollView               
                    data={this.state.data.menu}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />  */}
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
    title: {
        flex:1,
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        margin: 10,
        textTransform: 'uppercase'
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
    }  
});