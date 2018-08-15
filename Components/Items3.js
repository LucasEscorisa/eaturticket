import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class Items3 extends Component {
  render() {
    return (
      <View style={{ maxWidth: this.props.width / 2 - 20 }}>
        <View style={{ flex: 1 }}>
          <Image
            style={{
              flex: 1,
              width: this.props.width / 2 - 40,
              height: this.props.width / 2 - 40,
              resizeMode: "cover",
              marginHorizontal: 4,
              justifyContent: "space-evenly",
              marginBottom: 16,
              borderRadius: 18
            }}
            source={this.props.image}
          />
        </View>
      </View>
    );
  }
}

export default Items3;
