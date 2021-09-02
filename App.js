/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import Result from './src/components/Result';

export default function App(){
  const [tamanocafe, setTamanoCafe] = useState(null);
  const [tipocafe, setTipoCafe] = useState(null);
  const [tipopago, setTipoPago] = useState(null);
  const [cantidad, setCantidad] = useState(null);
  const [total, setTotal] = useState(null);
  const[errorMessage,setErrorMessage] = useState("");

  useEffect(() =>{
    if(tamanocafe && tipocafe && tipopago && cantidad) calculate();
    else reset();
  },[tamanocafe,tipocafe,tipopago,cantidad]);

  const calculate = () => {
    reset();

    if(!tamanocafe){
      setErrorMessage('Añade el tamaño del café');
    }else if(!tipocafe){
      setErrorMessage('Añade el tipo de café');
    }else if(!tipopago){
      setErrorMessage('Selecciona el tipo de pago');
    }else if(!cantidad){
      setErrorMessage('Selecciona la cantidad');
    }else{
      var size = 0;
      var type = 0;
      if(tamanocafe == 8){
        size = 1;
      }else if(tamanocafe == 12){
        size = 1.50;
      }else{
        size = 2;
      }
      if(tipocafe == "Mocha"){
        type = 2;
      }else if(tipocafe == "Te chai"){
        type =2.50;
      }else if(tipocafe == "Americano"){
        type = 1.50
      }else{
        type = 3
      }
      const sumapago = size + type;
      const cantidadpago = cantidad*sumapago;
      var cancelar1 = 0;
      var cancelar = 0; 
      if(tipopago == "Tarjeta"){
        cancelar1 = cantidadpago * 0.05;
        cancelar = cantidadpago - cancelar1;
      }else{
        cancelar1 = cantidadpago * 0.15;
        cancelar = cantidadpago - cancelar1;
      }
      setTotal({totalPayable: cancelar.toFixed(2).replace('.',','),});
    }
  };

  const reset = () =>{
    setErrorMessage("");
    setTotal(null);
  };


  return (
    <>
    <StatusBar barStyle="light-content"/>
    <SafeAreaView style={styles.Header}>
      <Text style={styles.HeadApp}>NSM Coffe Shop</Text>
      <Form
        setTamanoCafe={setTamanoCafe}
        setTipoCafe={setTipoCafe}
        setTipoPago={setTipoPago}
        setCantidad={setCantidad}
       />
    </SafeAreaView>
    <Result
      tamanocafe = {tamanocafe}
      tipocafe = {tipocafe}
      tipopago = {tipopago}
      cantidad = {cantidad}
      total = {total}
      errorMessage = {errorMessage}
    />
    <Footer></Footer>
    </>
  );
}

const styles = StyleSheet.create({
  Header:{
    backgroundColor:'#B85C38',
    height:300,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    alignItems:'center'
  },
  HeadApp:{
    fontSize:25,
    fontWeight:'bold',
    color:'#F7F6F2',
    marginTop:15
  },
})

