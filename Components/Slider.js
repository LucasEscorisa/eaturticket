import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

import * as firebase from 'firebase';

import Swiper from 'react-native-swiper';
import Items from "./Items";

import Firebase from '../Firebase/firebase';


function ignoreUndefined(data) {
    var dados = data;
    var auxiliar = [];
  
    for(var i in dados)
        if(dados[i] != undefined)
        auxiliar.push(dados[i]);

    return auxiliar;
}

const Slide = props => (

    <View style = {styles.container}>


        <Image style = {styles.image} source = {props.uri} />
        </View>
)

const {width} = Dimensions.get('window')

class Slider extends Component {
    constructor(props){
        super(props)
        this.state = {isLoading: true, dataSource:null};
    }


    componentDidMount(){
        var that = this;

        var swiperReader = firebase.database().ref('Catalogo').orderByChild('Categorias/Swiper').equalTo(true);
        
        swiperReader.once('value', function(snapshot){


            that.setState({
                isLoading: false,
                dataSource: ignoreUndefined(snapshot.val())
            }, function(){
                //Leave it blank
            })


        });
    };

    
  render() {
    
    console.log(this.state.dataSource);

    if(this.state.isLoading){
        return(
            <View>
                <Text>Loading</Text>
            </View>
        )
    }

        return (
            <View style = {{marginBottom: 16 }}>
                <Swiper
                autoplay
                height = {width - 70}>
        
                    {this.state.dataSource.map((item, i) => <Slide uri={{uri: item.Imagem}} key={i} />)}
                </Swiper>
            </View>
            );

    
  }
}

export default Slider;

const styles = StyleSheet.create({
container: {
    flex:1,
    justifyContent: 'center'
}, 
image:{
    flex: 1,
    width 
}
});
    

