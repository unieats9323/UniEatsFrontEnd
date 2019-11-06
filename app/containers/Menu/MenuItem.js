import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text, 
    Image,
    Button
} from 'react-native'
import { Avatar, Badge, Icon } from 'react-native-elements'
import colors from 'assets/colors'
import store from '../../store/store'



export default class MenuItem extends Component {
    render() {
        return(  
            <View style={styles.card} key={this.props.id}  >
                <View style={"flex:1"}>
                    <Image
                        rounded
                        source={{
                        uri: this.props.image,
                        }}
                        style={styles.image}
                    />

                    <Badge
                        status="success"
                        containerStyle={{ position: 'absolute', top: 10, right: 10 }}
                        value="2"
                    />
                </View>
                {/* <Image
                    style={styles.image}
                    source={{uri: this.props.image}}>                            
                </Image> */}
                <View style={styles.details}>
                  
                        <Text style={styles.title}>{this.props.name}</Text>

                        <Text style={styles.price}>${this.props.price}</Text>
                        <View styles={styles.button} style={[{ width: "75%", margin: 10, backgroundColor: "#FEC102" }]}>

                        <Button
                            color="black"
                            title="Add Item"
                            onPress={() => this.addItem(this.props.item)}
                            />
                            </View>
                    {/* </View>
                    <View style={styles.cartDetails}> 
                        <Icon style={styles.modify} name="remove"></Icon>
                        <Text style={styles.title}>0</Text>
                        <Icon style={styles.modify} name="add"></Icon>
                    </View>*/}
                  
                </View>  
             
            </View>   
                           
        );
    }

    addItem(item) {
        console.log('yellow')
        console.log(item)
        store.dispatch({type: 'ADD_ITEM_TO_CART', payload: {item}})
    }
    removeItem(item) {

    }
    
}



const styles = StyleSheet.create({
    card: {
        margin: 20,
        paddingBottom: 10,
        height: 150,
        display: 'flex',
        flex: 1,
        flexDirection: 'row'
    },
    image: {       
        alignItems: 'center',
        borderRadius: 150,
        overflow: 'hidden',
    
        width: 150,
        height: 150,
    },
    details: {    
       flex: 1,
        flexDirection: 'column',
 
    },
    title: {
        flex: 2,
        fontSize: 20,
        paddingLeft: 15,
        paddingRight: 15,
        letterSpacing: 2,
        fontFamily: 'System',
        marginTop: 10,
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    price: {
        flex:1,
        paddingTop: 0,
        fontSize: 18,
        paddingLeft: 15,
        fontWeight: '100',
        fontWeight: 'bold'
    },
    button: {        
        flex: 2,
        paddingBottom: 20,
        backgroundColor: colors.app_yellow,
      
        alignSelf: 'flex-start'
    }
    
   
 

});
