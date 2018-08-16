import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class Items3 extends Component {
  render() {
    return (
      <View style={{ maxWidth: this.props.width / 1 - 20 }}>
        <View style={{ flex: 1 }}>
          <Image
            style={{
              flex: 1,
              width: this.props.width / this.props.weight - 120 ,
              height: this.props.width / this.props.weight - 80,
              resizeMode: "cover",
              marginHorizontal: 4,
            }}
            source={this.props.image}
          />

          
          <Text style = {{fontSize: this.props.fontFit, fontWeight: '600',marginVertical: 8}}> {this.props.name} </Text>
        </View>
      </View>
    );
  }
}

export default Items3;

/*

<View style={{flex: 1, 
          position:'absolute', 
          height: 70,
          top: this.props.width / this.props.weight - 110,  
          width: this.props.width / this.props.weight - 40,
          marginHorizontal: 4,
          borderBottomLeftRadius: 18, 
          borderBottomRightRadius: 18,
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <Text style = {{fontSize: this.props.fontFit, color: 'white',fontWeight: '600', textAlign: 'center'}} > Nome Da serie </Text>
          </View>

          */
