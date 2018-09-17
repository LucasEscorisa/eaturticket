import React, { Component } from "react";
import {
  View,
  Text,
  Stylesheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  BackHandle,
  FlatList
} from "react-native";

//import { AndroidBackHandler } from 'react-navigation-backhandler';

import { withNavigation } from 'react-navigation';

import * as firebase from 'firebase';

import Firebase from '../Firebase/firebase';

const { height, width } = Dimensions.get("window");

function ignoreUndefined(data) {
  var dados = data;
  var auxiliar = [];

    for(var i in dados)
      if(dados[i] != undefined)
      auxiliar.push(dados[i]);

    return auxiliar;
}

class SavedTemplate extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
  }

  componentWillMount() {

    var that = this;
    let idComp = this.props.navigation.state.params.Tituloshow;

    var catalogo = firebase.database().ref('Catalogo');
    var receitas = firebase.database().ref('Receitas');

    receitas.orderByChild("Tituloshow").equalTo(idComp).once('value', function (snapshot) {

      that.setState({
        dataSource2: ignoreUndefined(snapshot.val())
      }, function () {
        // Leave it blank
      })
    })

  };

  _renderItem(item) {
    return (
      <View style={{
        marginHorizontal: 8,
        marginVertical: 4,
        backgroundColor: "#ffffff",
        borderRadius: 6
      }}>

        <TouchableOpacity onPress={() => { this.props.navigation.navigate('RecipeContent', { ID: item.ID }) }}>
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
                {item.Tituloshow}

              </Text>

              <Text style={{ fontSize: 18, fontWeight: "700", marginTop: 16, marginLeft: 8 }}>
                {item.Titulo}

              </Text>

            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (

      <View>

        <FlatList
          data={this.state.dataSource2}
          keyExtractor={(item) => item.ID}
          renderItem={({ item }) => this._renderItem(item)}


        />

      </View>



    );
  }
}

export default withNavigation(SavedTemplate);
