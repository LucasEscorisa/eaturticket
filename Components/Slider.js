import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

import Swiper from 'react-native-swiper';
import Items from "./Items";

const Slide = props => (

    <View style = {styles.container}>


        <Image style = {styles.image} source = {props.uri} />
        </View>
)

const {width} = Dimensions.get('window')

class Slider extends Component {
    constructor(props){
        super(props)
        this.state = {
            imageSlider: [
                require('../assets/samantha.jpg'),
                require('../assets/bb.jpg'),
                require('../assets/queerEye.jpg')
            ]
        }
    }
  render() {
    return (
      <View style = {{marginBottom: 16 }}>
          <Swiper
          
          autoplay
          height = {width - 70}

          >
              {
                this.state.imageSlider.map((item, i) => <Slide uri={item} />)
              }
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
    

