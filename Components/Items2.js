import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class Items2 extends Component {
  render() {
    return (
      <View>
        <View style={{ flex: 1 }}>
          <Image
            style={{
              flex: 1,
              width: this.props.width - 40,
              height: this.props.width - 40,
              resizeMode: "cover",
              marginVertical: 8
            }}
            source={this.props.image}
          />
        </View>

        <View
          style={{
            flex: 1,
            width: this.props.width - 40,
            position: "absolute",
            height: 100,
            bottom: 8,
            backgroundColor: "rgba(0,0,0,0.5)"
          }}
        />

        <Text
          style={{
            position: "absolute",
            width: this.props.width - 40,
            fontWeight: "bold",
            fontSize: 18,
            height: 70,
            textAlignVertical: "center",
            color: "white",
            bottom: 8,
            marginBottom: 10,
            paddingHorizontal: 8
          }} ellipsizeMode = 'tail' numberOfLines={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Pellentesque sagittis bibendum augue, eget dignissim dolor eleifend eget. 
        </Text>
      </View>
    );
  }
}

export default Items2;
