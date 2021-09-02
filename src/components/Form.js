import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function Form(props){
    const {setTamanoCafe,setTipoCafe,setTipoPago,setCantidad} = props;

    return(
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
            <RNPickerSelect style={picketSelectStyles} onValueChange={(value) => setTamanoCafe(value)}
                placeholder={{
                    label:'Seleccione el tamaño de su café',
                    value:null,
                }}
                items={[
                    {label:'Short (8 onz)',value:8},
                    {label:'Tall (12 onz)',value:12},
                    {label:'Grande (16 onz)',value:16}
                ]} />
            </View>
            <View style={styles.viewInputs2}>                
            <RNPickerSelect style={picketSelectStyles} onValueChange={(value) => setTipoCafe(value)}
                placeholder={{
                    label:'Seleccione el tipo de su café',
                    value:null,
                }}
                items={[
                    {label:'Mocha',value:'Mocha'},
                    {label:'Te chai',value:'Te chai'},
                    {label:'Americano',value:'Americano'},
                    {label:'Frappe',value:'Frappe'}
                ]} />
            </View>
            <View style={styles.viewInputs3}>    
            <RNPickerSelect style={picketSelectStyles} onValueChange={(value) => setTipoPago(value)}
                placeholder={{
                    label:'Tipo de Pago',
                    value:null,
                }}
                items={[
                    {label:'Efectivo',value:'Efectivo'},
                    {label:'Tarjeta',value:'Tarjeta'}
                ]} />
            </View>
            <View style={styles.viewInputs4}>
            <TextInput
                placeholder="Cantidad"
                keyboardType="numeric"
                style={styles.input}
                onChange={(e) => setCantidad(e.nativeEvent.text)}
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewForm:{
        position:'absolute',
        bottom:0,
        width:'100%',
        paddingHorizontal:40,
        padding:10,
        backgroundColor: '#E0C097',
        borderRadius:5,
        height:215,
        justifyContent:'center',
        marginTop:10,
        marginBottom:10
    },
    viewInputs:{
        flexDirection:'column',
        paddingTop:30,
        marginTop:5,
        marginLeft:-20,
        marginRight:-20  
    },
    viewInputs2:{
        flexDirection:'column',
        paddingTop:1,
        marginTop:5,
        marginLeft:-20,
        marginRight:-20 
    },
    viewInputs3:{
        flexDirection:'column',
        paddingTop:1,
        marginTop:5,
        marginBottom:10,
        marginLeft:-20,
        marginRight:150 
    },
    viewInputs4:{
        flexDirection:'row',
        paddingTop:1,
        marginTop:-65,
        marginBottom:30,
        marginLeft:180,
        marginRight:-250 
    },
    input:{
        height:56,
        borderWidth:0.2,
        borderColor:'grey',
        borderRadius:4,
        color:'black',
        paddingRight:30,
        backgroundColor:'#fff',
        width:'40%',
        paddingHorizontal:20,
    },
});

const picketSelectStyles = StyleSheet.create({
    inputIOS:{
        fontSize:16,
        paddingVertical:12,
        paddingHorizontal:10,
        borderWidth:1,
        borderColor:'grey',
        borderRadius:4,
        color:'black',
        paddingRight:30,
        backgroundColor:'#fff',
        marginLeft:-5,
        marginRight:-5,
    },
    inputAndroid:{
        fontSize:10,
        paddingHorizontal:5,
        paddingVertical:2,
        borderWidth:0.5,
        borderColor:'grey',
        borderRadius:8,
        color:'black',
        paddingRight:30,
        backgroundColor:'#fff',
    },
});