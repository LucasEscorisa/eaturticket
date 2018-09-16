import React, { Component } from "react";
import {
  View,
  Text,
  Stylesheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from "react-native";

import {
  createStackNavigator,
} from 'react-navigation';

const { height, width } = Dimensions.get("window");

class SavedTemplate extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "#FFA500"}}>
        <View style={{ 
          marginHorizontal:8, 
          marginVertical:4, 
          backgroundColor: "#ffffff", 
          borderRadius: 6}}>

          <TouchableOpacity>
          <View style={{
              margin: 8,
              flexDirection: 'row'
          }}>
          <Image
              style={{
                borderRadius: 6,
                width: width - 200,
                height: width - 240,
                resizeMode: "cover"
              }}
              source={require("../assets/Pancakes.jpg")}
            />

              <View>
              <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    color: "grey",
                    marginLeft: 8
                  }}
                >
                  {" "}
                  NOME DA SÉRIE
                </Text>

                <Text style={{ fontSize: 18, fontWeight: "700", marginTop:16 ,marginLeft: 8 }}>
                  {" "}
                  NOME DO PRATO
                </Text>
                
              </View>
            </View>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SavedTemplate;
