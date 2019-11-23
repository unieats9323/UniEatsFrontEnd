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
import Price from 'library/components/Price'


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
                <View style={styles.details}>
                    <Text style={styles.title}>{this.props.name}</Text>
                    <View style={styles.secondRow}>
                        <Price 
                            price={this.props.price}
                            style={styles.price}/>
                        
                        <View styles={styles.button} style={[{ width: "40%", margin: 10, backgroundColor: "#FEC102" }]}>

                        <Button
                            color="black"
                            title="ADD"
                            onPress={() => this.addItem(this.props.item)}
                            />
                        </View>  
                    </View>
                    
                </View>  
             
            </View>   
                           
        );
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
    secondRow: {
        flex: 3,
        flexDirection: 'row'
    },
    title: {
        flex: 2,
        fontSize: 16,
        paddingLeft: 15,
        paddingRight: 15,
        letterSpacing: 2,
        fontFamily: 'System',
        marginTop: 10,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    price: {
        flex:1,
        paddingLeft: 15,
        margin: 50,
    },
    button: {        
        flex: 1,
        paddingBottom: 20,
        backgroundColor: colors.app_yellow,
      
        alignSelf: 'flex-end'
    }
    
   
 

});
