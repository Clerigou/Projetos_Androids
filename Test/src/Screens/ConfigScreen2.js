import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, Alert} from 'react-native';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SQLite from 'react-native-sqlite-storage';
import { ConfigStyle } from '../Styles/ConfigStyle';

const db = SQLite.openDatabase(
    {
        name:'MainDB',
        location: 'default',
    },
    () => {},
    error => {console.log(error)}
);



export function ConfigScreen2({ navigation }) {
    
    useEffect(() => {
        createTable();
    }, []);

    const createTable = () => {
        db.transaction((tx) =>{
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS"
                +"User " 
                +"(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Day INTEGER, Month INTEGER, Year INTEGER, Color TEXT);"
            )
        })
    }  
    const[name, setName] = useState('')

    const today = new Date()
    const [day, setDay] = useState(0)
    const [month, setMonth] = useState(0)
    const [year, setYear] = useState(0)

    const [color, setColor] = useState ('')
    const [buttonColorBlue, setButtonColorBlue] = useState('gray')
    const [buttonColorGreen, setButtonColorGreen] = useState('gray')
    const [buttonColorRed, setButtonColorRed] = useState('gray')
    const [buttonColorYellow, setButtonColorYellow] = useState('gray')

    function changeColorBlue() {
        if (buttonColorGreen || buttonColorRed || buttonColorYellow === 'rgb(134,1,175)'){
            setButtonColorGreen('gray')
            setButtonColorRed('gray')
            setButtonColorYellow('gray')
        }
        setButtonColorBlue('rgb(134,1,175)')
        setColor('blue')
    }
    function changeColorGreen() {
        if (buttonColorGreen || buttonColorRed || buttonColorYellow === 'rgb(134,1,175)'){
            setButtonColorBlue('gray')
            setButtonColorRed('gray')
            setButtonColorYellow('gray')
        }
        setButtonColorGreen('rgb(134,1,175)')
        setColor('green')
    }
    function changeColorRed() {
        if (buttonColorGreen || buttonColorRed || buttonColorYellow === 'rgb(134,1,175)'){
            setButtonColorGreen('gray')
            setButtonColorBlue('gray')
            setButtonColorYellow('gray')
        } 
        setButtonColorRed('rgb(134,1,175)')
        setColor('red')
    }
    function changeColorYellow() {
        if (buttonColorGreen || buttonColorRed || buttonColorYellow === 'rgb(134,1,175)'){
            setButtonColorGreen('gray')
            setButtonColorRed('gray')
            setButtonColorBlue('gray')
        }
        setButtonColorYellow('rgb(134,1,175)') 
        setColor('yellow')
    }

    const setData = async () => {
        let correctname =/^[a-zA-Z]{2,40} [a-zA-Z]{2,40}$/
        if( !correctname.test(name) ){
            return(
            Alert.alert('Erro', 'Nome inadequado, coloque nome e sobrenome separados por espaço.', [
            {text: 'OK'}
            ]) )
        } else if (day === 0 || month === 0 || year === 0){
            return(
            Alert.alert('Erro', 'Preencha todas as datas!', [
                {text: 'OK'}
            ]) )
        } else if( year < 1850){
            return(
                Alert.alert('Erro', 'Data muito antiga!', [
                    {text: 'OK'}
                ]) )
        } else if( day > 31 || month > 12){
            return(
                Alert.alert('Erro', 'Coloque uma data válida!', [
                    {text: 'OK'}
                ]) )
        } else if (year > today.getFullYear()){
            return(
            Alert.alert('Erro', 'Data inválida, maior que a atual.', [
            {text: 'OK'}
            ]) )
        } else if (today.getFullYear() == year && month > today.getMonth()){
            return(
            Alert.alert('Erro', 'Data inválida, maior que a atual.', [
                {text: 'OK'}
            ]) )
        } else if (today.getFullYear() == year && today.getMonth() == month &&  day > today.getDate()){
            return(
            Alert.alert('Erro', 'Data inválida, maior que a atual.', [
                {text: 'OK'}
            ]) )
        } else if (color === ''){
            return(
            Alert.alert('Erro', 'Selecione uma cor', [
                {text: 'OK'}
            ]) )
        } 
        else {
            try {
                 await db.transaction( async (tx) => {
                    await tx.executeSql( 
                        "UPDATE User SET Name='"+name+"', Day="+ day+", Month="+ month +", Year="+ year+", Color ='"+ color +"'"
                       
                    )
                })
                navigation.navigate('terceira_tela');
            } catch (error) {
                console.log(error);
            }
        }
    }
    

    return (
      <SafeAreaView style={ConfigStyle.body}>
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

        <View style={ConfigStyle.nome}>
            <View style={ConfigStyle.nome_conteiner}>
                <Text style={ConfigStyle.text}>Nome</Text>
            </View>
        
            <View style={ConfigStyle.nome_input_conteiner}>
                <TextInput
                    onChangeText = {(text) => {setName(text)
                    }}
                />
            </View>
        </View>
      
        <View style={ConfigStyle.data}>
            <View style={ConfigStyle.data_conteiner}>

                <Text style={ConfigStyle.text}>
                    Data de nascimento:
                </Text>
            </View>

            <View style={ConfigStyle.data_conteiner_inputs}>
                <View style={ConfigStyle.data_input_parent}>
                    <TextInput
                    style = {ConfigStyle.data_input}
                    placeholder ="Dia"
                    color = 'black'
                    keyboardType='number-pad'
                    maxLength={2}
                    onChangeText = {(text) => {setDay(text)}}
                    />
                    <AntDesign  name = "down" color={'rgb(134,1,175)'} size={14}/>
                </View>

                <View style={ConfigStyle.data_input_parent} >
                    <TextInput
                    style = {ConfigStyle.data_input}
                    placeholder ="Mês"
                    color = 'black'
                    keyboardType='number-pad'
                    maxLength={2}
                    onChangeText = {(text) => {setMonth(text - 1)}}
                    />
                    <AntDesign  name = "down" color={'rgb(134,1,175)'} size={14}/>
                </View>

                <View  style={ConfigStyle.data_input_parent} >
                    <TextInput
                    style = {ConfigStyle.data_input}
                    placeholder ="Ano"
                    color = 'black'
                    keyboardType='number-pad'
                    maxLength={4}
                    onChangeText = {(text) => {setYear(text)}}
                    />
                    <AntDesign  name = "down" color={'rgb(134,1,175)'} size={14}/>
                </View >
            </View>
        </View>
     
        <View style={ConfigStyle.color}>
            <View style={ConfigStyle.color_text}>
                <Text style={ConfigStyle.text}> Cor Preferida</Text>
            </View>

            <View style={ConfigStyle.color_block_conteiner}>
                <View style={ConfigStyle.color_block_parent}>
                    <View style={ConfigStyle.color_block_Blue}>
                        <Text style={{color: 'blue'}}> . </Text>
                    </View>
                    <TouchableOpacity onPress={changeColorBlue}>
                        <FontAwesome 
                        name= 'circle' 
                        color={buttonColorBlue} 
                        size={22} />
                    </TouchableOpacity>
                </View>

                <View style={ConfigStyle.color_block_parent}>
                    <View style={ConfigStyle.color_block_Green}>
                        <Text style={{color: 'green'}}> . </Text>
                    </View>
                    <TouchableOpacity onPress={changeColorGreen}>
                        <FontAwesome 
                        name= 'circle' 
                        color={buttonColorGreen} 
                        size={22} />
                    </TouchableOpacity>
                </View>

                <View style={ConfigStyle.color_block_parent}>
                    <View style={ConfigStyle.color_block_Red}>
                        <Text style={{color: 'red'}}> . </Text>
                    </View>
                    <TouchableOpacity onPress={changeColorRed}>
                        <FontAwesome 
                        name= 'circle' 
                        color={buttonColorRed} 
                        size={22} />
                    </TouchableOpacity>
                </View>

                <View style={ConfigStyle.color_block_parent}>
                    <View style={ConfigStyle.color_block_Yellow}>
                        <Text style={{color: 'yellow'}}> . </Text>
                    </View>
                    <TouchableOpacity onPress={changeColorYellow}>
                        <FontAwesome 
                        name= 'circle' 
                        color={buttonColorYellow} 
                        size={22} />
                    </TouchableOpacity>
                </View>

            </View>

            
     
        </View>

        <View style={ConfigStyle.button_parent}>
                <TouchableOpacity 
                style={ConfigStyle.button}
                onPress={setData}
                >
                    <Text style={ConfigStyle.button_text}> OK</Text>               
                </TouchableOpacity>
            </View>
    </SafeAreaView>
)
}
    


 export default ConfigScreen2;