import { Text, StyleSheet, View, ImageBackground, Animated,Easing } from 'react-native'
import React,{useEffect, useState} from 'react'
export default function Background () {
  const[cargando, setCargando]=useState(true);
  const desvanecido = new Animated.Value(1);
useEffect(()=>{
const timer= setTimeout(()=>{
Animated.timing(desvanecido,{//agarra variable desvanecido y se la lleva al valor 0
  toValue:0,
  duration:800,
  easing: Easing.out(Easing.ease),
  useNativeDriver:true,

}).start(() => setCargando(false));
},2000);
return()=>clearTimeout(timer);
},[]);

  if(cargando){
    return (
      <Animated.View style={[styles.splashContainer,{opacity:desvanecido}]}>
      <ImageBackground
      source={require('../assets/gato.jpg')}
      resizeMode='contain' //fondo completo es la mas usada
      style = {styles.splashImage}
      >
        <Text style={styles.splashText}>cargando...</Text>
        </ImageBackground>
      </Animated.View>
    )
  }
    return (
      <ImageBackground
      source={require('../assets/portada.png')}
      resizeMode='cover' //fondo completo es la mas usada
      style = {styles.textContainer}
     
      >
        <Text style={styles.texto}>holaa</Text>
        </ImageBackground>
      
      //<View>
        //<Text>equipo 2</Text>
      //</View>
    )
}

const styles = StyleSheet.create({
  background:{
    flex:1,
  justifyContent:'center',
  alignItems:'center',
  width:'100%',
  height:'100%'
  },
  texto:{
    color:'white',
    fontSize:24,
    fontWeight:'bold',
  },
  splashContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:50,
  },
  splashImage:{
    flex:1,
    width:'100%',

  },
  splashText:{
    position:'absolute',
    marginBottom:60,
    fontSize:20,
    color:'#2f1d1dff'

  },
  textContainer:{
      backgroundColor:'black',
      padding:5,
  }
  

  
})