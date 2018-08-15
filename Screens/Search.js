import React, { Component } from 'react';
import {View, Text, StyleSheet,SafeAreaView,ScrollView} from 'react-native';
import SearchBar from '../Components/SearchBar';

class Search extends Component{
    render(){
        return(
            <SafeAreaView>

                <ScrollView style = {{paddingTop: 16}}>
                    
                    <SearchBar />

                </ScrollView>
                
            </SafeAreaView>
            
        )
    }
}

export default Search;