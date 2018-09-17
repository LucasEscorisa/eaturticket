import React, { Component } from "react";
import {
    View,
    Text,
    Stylesheet,
    Image,
    ScrollView,
    Dimensions,
    SafeAreaView,
    FlatList
} from "react-native";

import * as firebase from 'firebase';

import Firebase from '../Firebase/firebase';

const { height, width } = Dimensions.get("window");

function ignoreUndefined(data) {
    var dados = data;
    var auxiliar = [];

    for (var i in dados)
        if (dados[i] != undefined)
            auxiliar.push(dados[i]);

    return auxiliar;
}



class RecipeContent extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true, dataSource: null };
        console.ignoredYellowBox = [
            'Setting a timer'
        ];
    }

    componentDidMount() {

        var that = this;
        //let idComp = this.props.navigation.state.params.ID;

        var catalogo = firebase.database().ref('Catalogo');
        var receitas = firebase.database().ref('Receitas');

        receitas.orderByChild("Tituloshow").equalTo("Daredevil").once('value', function (snapshot) {
            that.setState({
                isLoading: false,
                dataSource: ignoreUndefined(snapshot.val())
            }, function () {
                // Leave it blank
            })
        })

    };

    _renderIngredientes(item, key){
        <Text style={{ fontSize: 14, marginVertical: 8, marginLeft: 32 }}>
                {item.Ing+key}
                {item.ingredientes}
                {item.Titulo}
                {console.log("Valor de key: " + key)}
                {console.log(item.Ing + key)}
        </Text>
    };

     


    render() {

        if (this.state.isLoading) {
            return (
                <View>
                    <Text>Loading</Text>
                </View>
            )
        }

        return (
            <SafeAreaView style={{ flex: 1, marginTop: 8, backgroundColor: '#FFA500' }}>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ paddingTop: 16, width: width }}
                >

                

                    <View>
                    <FlatList
                                data={this.state.dataSource[0]}
                                keyExtractor={(item) => item.ID}
                                renderItem={({ item, key }) => this._renderIngredientes(item, key)}


                            />
                        <Image
                            style={{
                                width: width,
                                height: width - 70,
                                borderBottomLeftRadius: 70,
                                borderBottomRightRadius: 70
                            }}
                            source={require("../assets/Pancakes.jpg")}
                        />

                        <View style={{
                            borderRadius: 6,
                            backgroundColor: "white",
                            marginHorizontal: 32,
                            marginTop: -64,
                            paddingVertical: 32

                        }}>
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: "400",
                                    color: "grey",
                                    marginLeft: 8
                                }}
                            >
                                {this.state.dataSource[0].Tituloshow}
                            </Text>

                            <Text style={{ fontSize: 18, fontWeight: "700", marginTop: 16, marginLeft: 8 }}>
                                {console.log(this.state.dataSource[0].Ingredientes)}
                                {this.state.dataSource[0].Titulo}
                            </Text>

                        </View>

                        <View style={{
                            borderRadius: 6,
                            backgroundColor: "white",
                            marginHorizontal: 16,
                            marginTop: 32

                        }}>

                            <Text style={{ fontSize: 18, fontWeight: "700", marginVertical: 16, marginLeft: 8 }}>
                                {" "}
                                INGREDIENTES
                        </Text>


                            {console.log(this.state.dataSource[0])}
                            

                            <Text style={{ fontSize: 14, marginVertical: 8, marginLeft: 32 }}>
                                - Item 1
                        </Text>
                            <Text style={{ fontSize: 14, marginVertical: 8, marginLeft: 32 }}>
                                - Item 2
                        </Text>
                            <Text style={{ fontSize: 14, marginVertical: 8, marginLeft: 32 }}>
                                - Item 3
                        </Text>
                            <Text style={{ fontSize: 14, marginVertical: 8, marginLeft: 32 }}>
                                - Item 4
                        </Text>

                        </View>

                        <View style={{
                            borderRadius: 6,
                            backgroundColor: "white",
                            marginHorizontal: 16,
                            marginTop: 16,
                            marginBottom: 32

                        }}>

                            <Text style={{ fontSize: 18, fontWeight: "700", marginVertical: 16, marginLeft: 8 }}>
                                {" "}
                                MODO DE PREPARO
                        </Text>

                            <Text style={{ fontSize: 14, marginVertical: 8, marginLeft: 32 }}>
                                - Passo 1
                        </Text>
                            <Text style={{ fontSize: 14, marginVertical: 8, marginLeft: 32 }}>
                                - Passo 2
                        </Text>
                            <Text style={{ fontSize: 14, marginVertical: 8, marginLeft: 32 }}>
                                - Passo 3
                        </Text>
                            <Text style={{ fontSize: 14, marginVertical: 8, marginLeft: 32 }}>
                                - Passo 4
                        </Text>

                        </View>

                    </View>

                </ScrollView>


            </SafeAreaView>
        )
    }
}

export default RecipeContent;
