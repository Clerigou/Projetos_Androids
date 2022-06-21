import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5'
import SQLite from 'react-native-sqlite-storage';
import moment from 'moment';
import { ConfigStyle } from '../Styles/ConfigStyle';

const db = SQLite.openDatabase(
    {
        name:'MainDB',
        location: 'default',
    },
    () => { },
    error => {console.log(error)}
);


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
            db.transaction( (tx) => {
                tx.executeSql(
                    "SELECT * FROM User ",
                    [],
                    (tx, results) => {
                        var len = results.rows.length;
                        if(len > 0) {
                            var userName = results.rows.item(0).Name;
                            var userDay = results.rows.item(0).Day;
                            var userMonth = results.rows.item(0).Month;
                            var userYear = results.rows.item(0).Year;
                            var userColor = results.rows.item(0).Color;
                            setName(userName);
                            setDay(userDay);
                            setMonth(userMonth);
                            setYear(userYear);
                            setColor(userColor);
                        }
                    }
                )
            })
        } catch (error) {
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


