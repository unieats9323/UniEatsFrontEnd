/**
 * Responsible for making each cards of dishes.
 * **/
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text, 
    TouchableOpacity
} from 'react-native'
import { Menu } from '../Menu/Menu'

export default class DishItem extends Component {
    render() {
        return(  
            <TouchableOpacity style={styles.card} key={this.props.id}>
                    <View style={styles.innerDetails}>
                        <Text style={styles.title}>{"Dish Name"}</Text>
                        <Text style={styles.subtitle}>{this.props.name}</Text>   
                        <Text style={styles.title}>{"Price"}</Text> 
                        <Text style={styles.subtitle}>{"$" + this.props.price}</Text>
                        <Text style={styles.title}>{"Quantity"}</Text>
                        <Text style={styles.subtitle}>{this.props.specialNotes}</Text>
                        <Text style={styles.title}>{"Special Notes"}</Text>                 
                        <Text style={styles.subtitle}>{this.props.specialNotes}</Text>                    
                    </View>                          
            </TouchableOpacity>    
        );
    }
}

const styles = StyleSheet.create({
    card: {
        margin: 10,
        marginBottom: 0,
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 20,
        backgroundColor:'white'
    },
    image: {
        width: '100%',
        padding:'50%',
        position: 'relative',
        alignItems: 'center'
    },
    details: {
        position: 'relative',
        width: '100%',
        height: '100%',       
        alignSelf: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)',
        bottom: 15,
        margin:5,
        borderRadius: 20,
        overflow: 'hidden',
        flexDirection: 'row'
    },
    innerDetails: {
        margin: 10,
        position:'relative',
        flex: 1,
        backgroundColor:'white',
        justifyContent: 'center'

    },
    subtitle: {
        fontSize: 15,
        paddingLeft: 16,
        paddingRight: 0,
        paddingTop: 10,
        paddingBottom: 20,
        fontWeight: '300',
        fontFamily: 'System',
        letterSpacing: 3,
        color: 'black',
    }  ,
    title: {
        fontSize: 12,
        paddingLeft: 8,
        paddingRight: 0,
        fontWeight: 'bold',
        fontFamily: 'System',
        textTransform: 'uppercase',
        letterSpacing: 3,
        color: 'black',
    }  
});
