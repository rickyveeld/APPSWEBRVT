import { Text, StyleSheet, View, ScrollView,Button, } from 'react-native'
import React, { useState, useRef } from 'react'

export default function ScrollScreens () {
  const scrollRef=useRef();
  const irAlFinal=()=>{
    scrollRef.current.scrollToEnd({animated:true})//lo del final es para que no de el salto directo
  }


    return (
    
        <ScrollView 
        ref={scrollRef}//funcion creada al final
        style = {styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={true}

        
        >
          <Text style = {styles.Titulo}> Practica: Scroll View</Text>
          <Text style = {styles.Titulo2}> ejemplo desplazamiento verticalmente</Text>
         <View>
          <Button
          color='#2c8396ff'
          title='ir al final'
          onPress={irAlFinal}
          
          ></Button>
         </View>
          <View style={styles.Elementos}>
            <Text style={styles.text}>Elemento 1</Text>
           </View>
           <View style={styles.Elementos}>
            <Text style={styles.text}>Elemento 2</Text>
           </View>
           <View style={styles.Elementos}>
            <Text style={styles.text}>Elemento 3</Text>
           </View>
           <View style={styles.Elementos}>
            <Text style={styles.text}>Elemento 4</Text>
           </View>
           <View style={styles.Elementos}>
            <Text style={styles.text}>Elemento 5</Text>
           </View>
          

          <Text style={styles.Titulo2}>Ejemplo de desplazamiento</Text>
          <ScrollView
          horizontal //propiedad para elementos en horizontal
          nestedScrollEnabled={true}//mejor manejo del desplazamiento
          style={styles.Scrollhorizontal}
          showsHorizontalScrollIndicator={true} //para poner la barrita de desplazamiento si esta en false no se ve
          >
           <View style={styles.Elementos2}>
            <Text style={styles.text}>Elemento 1</Text>
           </View>
           <View style={styles.Elementos2}>
            <Text style={styles.text}>Elemento 2</Text>
           </View>
           <View style={styles.Elementos2}>
            <Text style={styles.text}>Elemento 3</Text>
           </View>
           <View style={styles.Elementos2}>
            <Text style={styles.text}>Elemento 4</Text>
           </View>
           <View style={styles.Elementos2}>
            <Text style={styles.text}>Elemento 5</Text>
           </View>
           <View style={styles.Elementos2}>
            <Text style={styles.text}>Elemento 6</Text>
           </View>
           <View style={styles.Elementos2}>
            <Text style={styles.text}>Elemento 7</Text>
           </View>
           <View style={styles.Elementos2}>
            <Text style={styles.text}>Elemento 8</Text>
           </View>
           <View style={styles.Elementos2}>
            <Text style={styles.text}>Elemento 9</Text>
           </View>
           <View style={styles.Elementos2}>
            <Text style={styles.text}>Elemento 10</Text>
           </View>
           <View style={styles.Elementos2}>
            <Text style={styles.text}>Elemento 11</Text>
           </View>
           <View style={styles.Elementos2}>
            <Text style={styles.text}>Elemento 12</Text>
           </View>

          </ScrollView>
        </ScrollView>

    )
  
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#4782a1ff'

  },
  content:{
    padding:20,
    paddingBottom:40,
  },
  Titulo:{
    fontSize:30,
    fontWeight:'bold',
    marginBottom:10,
    color:'#101010ff',
    textAlign:'center'
  },
  Titulo2:{
   fontSize:30,
    fontWeight:'bold',
    marginBottom:10,
    color:'#101010ff',
    textAlign:'center' 
  },
  Elementos:{
    width:'100%',
    height:100,
    backgroundColor:'#0f2b56ff',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:10,
    borderRadius:10,
  },
  Elementos2:{
    width:120,
    height:120,
    backgroundColor:'#0f2b56ff',
    justifyContent:'center',
    alignItems:'center',
    marginRight:10,
    borderRadius:10,
  },
  text:{
    fontSize:16,
    fontFamily:'Courier',
    color:'#3861a9ff',
    fontWeight:'900',
    textDecorationLine:'underline'


  },
  Scrollhorizontal:{
    marginVertical:10,
    width:'100%',

  }


})