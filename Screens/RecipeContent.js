import React, { Component } from "react";
import {
    View,
    Text,
    Stylesheet,
    Image,
    ScrollView,
    Dimensions,
    SafeAreaView
} from "react-native";

const { height, width } = Dimensions.get("window");

class RecipeContent extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1, marginTop: 8, backgroundColor:'#FFA500' }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{paddingTop: 16, width: width }}
                >

                    <Image
                        style={{
                            width: width,
                            height: width - 70,
                            borderBottomLeftRadius:70,
                            borderBottomRightRadius:70
                        }}
                        source={require("../assets/Pancakes.jpg")}
                    />

                    <View style={{borderRadius:6, 
                    backgroundColor: "white",
                    marginHorizontal:32,
                    marginTop:-64,
                    paddingVertical:32

                    }}>
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

                        <Text style={{ fontSize: 18, fontWeight: "700", marginTop: 16, marginLeft: 8 }}>
                            {" "}
                            NOME DO PRATO
                        </Text>

                    </View>

                    <View style={{borderRadius:6, 
                    backgroundColor: "white",
                    marginHorizontal: 16,
                    marginTop: 32

                    }}>

                        <Text style={{ fontSize: 18,fontWeight: "700", marginVertical: 16, marginLeft: 8 }}>
                            {" "}
                            INGREDIENTES
                        </Text>

                        <Text style={{fontSize: 14, marginVertical: 8, marginLeft: 32 }}>
                            - Item 1
                        </Text>
                        <Text style={{fontSize: 14, marginVertical: 8, marginLeft: 32 }}>
                            - Item 2
                        </Text>
                        <Text style={{fontSize: 14, marginVertical: 8, marginLeft: 32 }}>
                            - Item 3
                        </Text>
                        <Text style={{fontSize: 14, marginVertical: 8, marginLeft: 32 }}>
                            - Item 4
                        </Text>

                    </View>

                    <View style={{borderRadius:6, 
                    backgroundColor: "white",
                    marginHorizontal: 16,
                    marginTop: 16,
                    marginBottom:32

                    }}>

                        <Text style={{ fontSize: 18,fontWeight: "700", marginVertical: 16, marginLeft: 8 }}>
                            {" "}
                            MODO DE PREPARO
                        </Text>

                        <Text style={{fontSize: 14, marginVertical: 8, marginLeft: 32 }}>
                            - Passo 1
                        </Text>
                        <Text style={{fontSize: 14, marginVertical: 8, marginLeft: 32 }}>
                            - Passo 2
                        </Text>
                        <Text style={{fontSize: 14, marginVertical: 8, marginLeft: 32 }}>
                            - Passo 3
                        </Text>
                        <Text style={{fontSize: 14, marginVertical: 8, marginLeft: 32 }}>
                            - Passo 4
                        </Text>

                    </View>



                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default RecipeContent;
