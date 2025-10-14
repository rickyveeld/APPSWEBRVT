//Zona de importaciones (zona 1)
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React, {useState} from 'react';
//Main Zona de componentes (zona 2)
export default function App() {
  const[contador,setContador]=useState(0);
  return (
    //objeto estilos en contenedor
    <View style={styles.container}> 
      <Text style={styles.texto}> Contador:</Text>
      <Text style={styles.texto2}> {contador}</Text>

      <View style={styles.contenedorBotones}>
      <Button color="blue"title='Incrementar' onPress={()=>setContador(contador+1)}></Button>
      <Button color="blue"title='decremento' onPress={()=>setContador(contador-1)}></Button>
      <Button color="blue"title='reinicio' onPress={()=>setContador(contador - contador)}></Button>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}
//zona de estilos y posicionamiento()
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c304eff',
    alignItems: 'center', //trabaja en el eje X (start izquierda, end derecha)
    justifyContent: 'center',//trabaja en el eje Y (start arriba end abajo)
    
  },
  texto:{
      fontFamily:"Times New Roman",
      fontSize:30,
      color:'#85c027ff',
      fontWeight:'bold',
      fontStyle:'italic',
      textDecorationLine:'line-through',

    },
    texto2:{
      fontFamily:"Times New Roman",//tipografia
      fontSize:40,//tamaño de fuente
      color:'#27a1c0ff', //color
      fontWeight:'bold', //negritas
      fontStyle:'italic', //lo inclina
      textDecorationLine:'line-through', //rallita de 100 en 100 hasta 900 entre mas valor mas grueso
    },
    
    contenedorBotones:{
      marginTop: 40 ,
      flexDirection:'row',//se puede column y row columnreverse y rowreverse
      gap:15, //separacion entre elementos
       //asigna espacio hacia abajo para empezar a separarse
    },
});
