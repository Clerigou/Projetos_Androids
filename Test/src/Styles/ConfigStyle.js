import { StyleSheet } from "react-native"


export const ConfigStyle = StyleSheet.create({
    // ******************* GERAL *******************
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
  // ******************* HEADER *******************
    header: {
        flex: 2,
        width: '100%',
        marginBottom: 10,
    },
    header_conteiner: {
        height: '100%',
        width: '100%',
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(134,1,175)',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    header_react_icon: {
        backgroundColor: 'white',
        borderRadius: 1000,
        padding: 10,      
    },
// ******************* TITLE( config 1 ) *******************
    title: {
        width: '100%',
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title_conteiner: {
        width: '80%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 15,
    },
    title_text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
// ******************* DATES ( config 1 )*******************
    dates: {
        flex: 2,
        width: '100%',
        marginBottom: 20,
        alignItems: 'center',
        justifyitems: 'center,'
    },
    dates_conteiner: {
        width: '75%',
    },
    dates_input: {
        flex: 1,
    },
    dates_parent_input: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgb(220,220,220)',
        marginBottom: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        maxHeight: 40,
    },
// ******************* BUTTON ( config 1 ) *******************
    button_parent_1: {
        alignItems: 'flex-end',
    },
    button_1: {
        borderRadius: 10,
        backgroundColor: 'rgb(134,1,175)',
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
// ******************* NOME(CONFIG 2) *******************
    nome: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    nome_conteiner: {
        width: '65%',
        justifyContent: 'flex-start',
        marginBottom: 5,
    },
    nome_input_conteiner: {
        width: '70%',
        backgroundColor: 'rgb(220,220,220)',
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 10,
        maxHeight: 37,
    },
// ******************* DATA(CONFIG 2) *******************
    data: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    data_conteiner: {
        width: '65%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 5,
    },
    data_conteiner_inputs: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10,
    },
    data_input_parent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgb(220,220,220)',
        marginBottom: 10,
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 10,
        maxHeight: 37,
    },
    data_input: {
       paddingRight: 20,
    },
// ******************* COLOR (CONFIG 2) *******************
    color: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    color_text: {
        width: '65%',
        justifyContent: 'flex-start',
        marginBottom: 5,
    },
    color_block_conteiner: {
        width: '55%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    color_block_parent: {
        width:'100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
    color_block_Blue: {
        backgroundColor: 'blue',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 5,
    },
    color_block_Green: {
        backgroundColor: 'green',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 5,
    },
    color_block_Red: {
        backgroundColor: 'red',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 5,
    },
    color_block_Yellow: {
        backgroundColor: 'yellow',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 5,
    },
// ******************* BUTTON (CONFIG 2) *******************
    button_parent: {
        width: '85%',
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    button: {
        borderRadius: 10,
        backgroundColor: 'rgb(134,1,175)',
        paddingHorizontal: 30,
        paddingVertical: 8,
    },
    button_text: {
        color: 'white',
    },
//
    frase: {
        width: '100%',
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
//
    tela_ilustrativa: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
      
})


