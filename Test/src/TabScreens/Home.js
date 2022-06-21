import React from 'react';
import { View, Text} from 'react-native';
import { ConfigStyle } from '../Styles/ConfigStyle';


export default function Home() {
 

    return (
        <View style = {ConfigStyle.body}>
            <View style={ConfigStyle.tela_ilustrativa}>
                <Text style={{fontSize: 30, color: 'rgb(134,1,175)'}}> Tela opcional </Text>
            </View>  
        </View>
    )
}