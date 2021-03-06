import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Dimensions, Image} from "react-native";
import SavedTemplate from "../SavedComponents/SavedTemplate";

const { height, width } = Dimensions.get("window");
HEADER_MAX_HEIGHT = 97;

class RecipesList extends Component{
    render(){
        return(
            <SafeAreaView style={{ flex: 1, marginTop: 8, backgroundColor: "#FFA500"}}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ paddingTop: 16 }}
            >
    
              <SavedTemplate />

    
              
            </ScrollView>
          </SafeAreaView>
        )
    }
}

export default RecipesList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})