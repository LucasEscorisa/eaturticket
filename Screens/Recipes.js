import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Recipes extends Component{
    render(){
        return(
            <View style ={styles.container}>
                <Text>Recipes</Text>
            </View>
        )
    }
}

export default Recipes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})