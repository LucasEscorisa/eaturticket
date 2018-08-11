import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchBar from '../Components/SearchBar';

class Recipes extends Component {
    render() {
        return (
            <View>
                <SearchBar />

                <View
                    style={{
                        paddingHorizontal: 20,
                        marginTop: 20,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        backgroundColor: 'red'
                    }}>

                </View>
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