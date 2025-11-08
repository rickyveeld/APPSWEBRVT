import { Text, StyleSheet, View, ImageBackground, Animated,Easing } from 'react-native'
import React,{useEffect, useState} from 'react'

export default function Examen () {
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
      source={require('../assets/images.jpg')}
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
      source={require('../assets/fondoex.jpg')}
      resizeMode='cover' //fondo completo es la mas usada
      style = {styles.background}
     
      >
        




        <View style = {styles.cuadro}>
            <Text style={styles.texto}>Header</Text>
            
        
        </View>
        </ImageBackground>


    )

}

const styles = StyleSheet.create({
    background:{
        width:"100",
        height:"100",
        flex:1,
        
    },
     splashImage:{
    flex:1,
    width:'100%',
    height:'100%',


  },
  splashText:{
    position:'absolute',
    marginBottom:60,
    fontSize:20,
    color:'#2f1d1dff'

  },
  encabezado:{
    backgroundColor:"#f6f0f0ff",
    width:100,
    heigjt:100,
    justifyContent:"flex-start"
  },
  cuadro:{
    width: "100%",
    height:50,
    backgroundColor:'#ffffffc4',
    justifyContent: 'center',    // Centra verticalmente
    alignItems: 'center',
    justifyContent:"flex-start" 
},
texto:{
    fontFamily:"Times New Roman",
      fontSize:40,
      color:'#02021bff',
      fontWeight:'bold',
      fontStyle:'italic',
      justifyContent:'center',
},
    
})