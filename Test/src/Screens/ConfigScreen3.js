import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5'
import moment from 'moment';
import { ConfigStyle } from '../Styles/ConfigStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function ConfigScreen3 ({ navigation }) {

    const [name, setName] = useState('')
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [color, setColor] = useState ('')

    const a = moment([year, month, day])
    const b = moment()
    const result = b.diff(a, 'years')

  

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null){
                        let user = JSON.parse(value);
                        setName(user.Name);
                        setDay(user.Day);
                        setMonth(user.Month);
                        setYear(user.Year);
                        setColor(user.Color);
                     }
                    }) 
        }
        
             
            
        catch (error) {
            console.log(error);
        }
    }


   
    
    return (
    <View style={ConfigStyle.body}>
        <View style={ConfigStyle.header}>
            <View style={ConfigStyle.header_conteiner}>
                <View style={ConfigStyle.header_react_icon}>
                    <FontAwesome5Brands 
                    name= "react"
                    size={80}
                    color= 'rgb(134,1,175)'
                    />
                </View>
            </View>
        </View>
        <View style={ConfigStyle.frase}>
            <Text style={{color: color, fontSize: 40,}}>{name} tem {result} anos.</Text>
        </View>
    </View>
)
}


