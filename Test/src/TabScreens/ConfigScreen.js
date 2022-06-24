
import React, {useState} from 'react';
import { View, Text,TouchableOpacity, TextInput, Alert} from 'react-native';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ConfigStyle } from '../Styles/ConfigStyle';





export default function Config({ navigation }){



    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')


    let today = new Date()
    let atualday = today.getDate()
    let atualmonth = today.getMonth()
    let atualyear = today.getFullYear()

    const submit1 = () => {
       if(day == atualday && month == atualmonth && year == atualyear) {
                return (  navigation.navigate('Segunda_Tela') )
               
           
            
        } else {
            return(
                Alert.alert('Erro', 'A data inserida não é a de hoje', [
                {text: 'OK'} ])
                )
               
        }
        
    }
    

  
    return(
       
        <View style={ConfigStyle.body}>
            <View style={ConfigStyle.header}>
                <View style={{
                       height: '85%',
                       width: '100%',
                       marginBottom: 5,
                       justifyContent: 'center',
                       alignItems: 'center',
                       backgroundColor: 'rgb(134,1,175)',
                       borderBottomLeftRadius: 20,
                       borderBottomRightRadius: 20,
                }}>
                    <View style={ConfigStyle.header_react_icon}>
                        <FontAwesome5Brands 
                        name= "react"
                        size={80}
                        color= 'rgb(134,1,175)'
                        />
                    </View>
                </View>
            </View>
            <View style={ConfigStyle.title}>
                <View style={ConfigStyle.title_conteiner}>
                    <Text style={ConfigStyle.title_text}>
                    Data de hoje: 
                    </Text>
                </View>

            </View>
           
            <View style={ConfigStyle.dates}>
                <View style={ConfigStyle.dates_conteiner}>
                    <View 
                    style={ConfigStyle.dates_parent_input}
                    behavior = "padding"
                    >
                        <TextInput
                        style = {ConfigStyle.dates_input}
                        placeholder ="Dia"
                        color = 'black'
                        keyboardType='number-pad'
                        maxLength={2}
                        onChangeText = {(text) => {setDay(text)}}
                        />
                        <AntDesign  name = "down" color={'rgb(134,1,175)'} size={18}/>
                    </View>

                    <View style={ConfigStyle.dates_parent_input} >
                        <TextInput
                        style = {ConfigStyle.dates_input}
                        placeholder ="Mês"
                        color = 'black'
                        keyboardType='number-pad'
                        maxLength={2}
                        onChangeText = {(text) => {setMonth(text - 1)}}
                        />
                        <AntDesign  name = "down" color={'rgb(134,1,175)'} size={18}/>
                    </View>

                    <View  style={ConfigStyle.dates_parent_input} >
                        <TextInput
                        style = {ConfigStyle.dates_input}
                        placeholder ="Ano"
                        color = 'black'
                        keyboardType='number-pad'
                        maxLength={4}
                        onChangeText = {(text) => {setYear(text)}}
                        />
                        <AntDesign  name = "down" color={'rgb(134,1,175)'} size={18}/>
                    </View >

                    <View style={ConfigStyle.button_parent_1}>
                        <TouchableOpacity
                            onPress={submit1}
                            style={ConfigStyle.button_1}
                        >
                        <Text style={ConfigStyle.button_text}> OK </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
)}