import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class categoryList extends Component {
    render() {
        return (
            <View>
            <Text style = {{paddingLeft: 16, fontSize: 36, fontWeight: '800'}}>Favoritos</Text>
            <FlatList style = {styles.container}
              horizontal 
              showsHorizontalScrollIndicator={false}
              data={this.state.dataSource}
              keyExtractor = {(item) => item.ID}
              renderItem={({item}) => this._renderItem(item, 'large')}
              
            
            />
            </View>
        );
    }
}
export default categoryList;