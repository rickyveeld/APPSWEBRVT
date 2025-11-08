import { Text, StyleSheet, View, ImageBackground, Animated,Easing,ScrollView,Button,Switch } from 'react-native'
import React,{useEffect, useState} from 'react'

export default function Examen () {
const[cargando, setCargando]=useState(true);
  const desvanecido = new Animated.Value(1);
  const [isOn, setIsOn] = useState(false);
  const [isOnn, setIsOnn] = useState(false);
  const [isOnnn, setIsOnnn] = useState(false);
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
     
      > <View style = {styles.cuadro}>
            <Text style={styles.texto}>Mis deberes:</Text>
            <Text style={styles.fecha}> 07/11/2025</Text>
            </View>
            <ScrollView
            style = {styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={true}
            >
                
            <View style={styles.Elementos2}>
            <Text style={styles.text}>Limpiar la sala</Text>
            <Text style={styles.descripcion}>organizar todo lo que hay en la sala</Text>
            <Switch
        value={isOn}
        onValueChange={() => setIsOn(!isOn)}
        trackColor={{ true: '#63c0d0ff', false: '#888' }}
        style={styles.switch}
      />
           </View>
           <View style={styles.Elementos3}>
            <Text style={styles.text}>Lavar los trastes</Text>
            <Text style={styles.descripcion}>realizar el lavado de todo lo que hay en la cocina</Text>
  <Switch
        value={isOnn}
        onValueChange={() => setIsOnn(!isOnn)}
        trackColor={{ true: '#4da1d1ff', false: '#888' }}
        style={styles.switch}
      />
           </View>
           <View style={styles.Elementos4}>
            <Text style={styles.text}>pasear al perro</Text>
            <Text style={styles.descripcion}>sacar a luna a dar una vuelta</Text>
           <Switch
        value={isOnnn}
        onValueChange={() => setIsOnnn(!isOnnn)}
        trackColor={{ true: '#39a5abff', false: '#888' }}
        style={styles.switch}
      />
           </View>

            </ScrollView>
            

       
        </ImageBackground>


    )

}

const styles = StyleSheet.create({
    background:{
        width:"100",
        height:"100",
        flex:1,
        justifyContent:"center"
        
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
    heigjt:150,
    justifyContent:"flex-start",
  },
  cuadro:{
    width: "100%",
    height:100,
    backgroundColor:'#ffffffc4',    // Centra verticalmente
    alignItems: 'center',
    textAlign:"right"
    
},
texto:{
    fontFamily:"Times New Roman",
      fontSize:40,
      color:'#02021bff',
      fontWeight:'bold',
      fontStyle:'italic',
      alignSelf:"flex-start"
},
fecha:{
    justifyContent:"space-evenly",
    fontSize:20,
    fontWeight:'bold',
    alignSelf:"flex-end"
},
Scrollhorizontal:{
    marginVertical:10,
    width:'100%',

  },
  Elementos2:{
    width:"100%",
    height:120,
    backgroundColor:'#0f2b5684',
    justifyContent:'flex-start',
    alignItems:'center',
    marginRight:10,
    borderRadius:10,
    marginTop:20,
  },
  text:{
    fontSize:16,
    fontFamily:'Courier',
    color:'#3861a9ff',
    fontWeight:'900',
    textDecorationLine:'underline'


  },
  Elementos3:{
    width:"100%",
    height:120,
    backgroundColor:'#75a4ebec',
    justifyContent:'flex-start',
    alignItems:'center',
    marginRight:10,
    borderRadius:10,
    marginTop:20,
  },
  Elementos4:{
    width:"100%",
    height:120,
    backgroundColor:'#36afc2ef',
    justifyContent:'flex-start',
    alignItems:'center',
    marginRight:10,
    borderRadius:10,
    marginTop:20,
  },
  descripcion:{

  },
  status:{
    alignSelf:"flex-end"
  },
  switch:{
    alignSelf:"flex-end"

  },
    
})