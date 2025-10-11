//Zona de importaciones (zona 1)
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React, {useState} from 'react';
//Main Zona de componentes (zona 2)
export default function App() {
  const[contador,setContador]=useState(0);
  return (
    <View style={styles.container}>
      <Text>Contador:{contador}</Text>
      <Button title='Incrementar' onPress={()=>setContador(contador+1)}></Button>
      <Button title='decremento' onPress={()=>setContador(contador-1)}></Button>
      <Button title='reinicio' onPress={()=>setContador(contador - contador)}></Button>
      <StatusBar style="auto" />
    </View>
  );
}
//zona de estilos y posicionamiento()
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
