import React, { Component } from "react";
import { View, Text, Stylesheet, Image} from "react-native";

class Items extends Component{

    render(){
        return(
            <View
            style={{
              width: this.props.width / 2 - 25,
              height: this.props.width / 2 - 25,

            }}
          >
            <View style={{ flex: 1 }}>
              <Image
                style={{
                  flex: 1,
                  width: null,
                  height: null,
                  resizeMode: "cover",
                  marginTop: 8
                }}
                source= {this.props.image}
              />
            </View>

            
            <View style={{flex: 1, position:'absolute', height:45, bottom:0, width: this.props.width / 2 - 26, 
            backgroundColor: 'rgba(0,0,0,0.5)'}}></View>
            
            <Text
            style ={{position: 'absolute',
            width: this.props.width / 2 - 26,
            fontWeight: 'bold',
            fontSize: 18, 
            justifyContent: 'center',
            textAlign: 'center',
            textAlignVertical: 'center',
            color: 'white',
            bottom: 0,
            marginBottom: 10}}> Text </Text>

          </View>
        );
    }
}

export default Items;

