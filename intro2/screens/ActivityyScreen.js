import { Text, StyleSheet, View, Button,ActivityIndicator } from 'react-native'
import React, { Component, useState } from 'react'

export default function  ActivityScreen () {
const[loading, setLoading]=useState(false);
const startLoading = () =>{
  setLoading(true);
  setTimeout(()=>setLoading(false),3000)
};
   if(loading){
    return(
    <View style={styles.container}>
      <View style={styles.loaderContainer}>
        <ActivityIndicator
        size="large"
        color="#267f96ff"
        animating={true}
        hidesWhenStopped={true}
        />
        <Text style={styles.texto}>cargando...</Text>



      </View>
    </View>
    );
   }
  return(
<View style={styles.container}>
  <Text>ActivityIndicator</Text>
  <Button title="carga de datos" onPress={startLoading}/>
</View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#538b95ff'
  },
  texto:{
    color:'#110505ff'
  },
  title:{
    fontSize:20,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:20,
  },
  loaderContainer:{
    alignItems:'center'

  },
})