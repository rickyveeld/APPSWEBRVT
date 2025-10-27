import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreens from './BotonesScreens'
import Background from './Background'
import FlatListScreens from './FlatListScreens'
import ScrollScreens from './ScrollScreens'
import ModalScreens from './ModalScreens'
import BottomSheetScreens from './BottomSheetScreens'
import TextScreens from './TextScreens'
import Repaso1Screen from './Repaso1Screen'
export default function MenuScreen () {
    const[screen,setScreen]=useState('menu');
    switch(screen){
        case 'contador':
            return <ContadorScreen/>
        case 'botones':
            return <BotonesScreens/>
        case 'Background':
             return <Background/>
        case 'FlatListScreens':
            return <FlatListScreens/>
        case 'ScrollScreens':
             return <ScrollScreens/>
        case 'ModalScreens':
            return <ModalScreens/>
        case 'BottomSheetScreens':
            return<BottomSheetScreens/>
            case 'TextScreens':
                return <TextScreens/>
            case 'Repaso1Screen':
                return <Repaso1Screen/>
        case 'menu':
            default:
                 return (
      <View style={styles.container}>
        <Text>Menu de Practicas</Text>
        <Button onPress={()=>setScreen('contador')} title='Practica contador'/>
        <Button onPress={()=>setScreen('botones')} title='Practica botones'/>
        <Button onPress={()=>setScreen('Background')} title='Practica imageBackground'/>
        <Button onPress={()=>setScreen('FlatListScreens')} title='Practica FlatListScreens'/>
        <Button onPress={()=>setScreen('ScrollScreens')} title='Practica ScrollScreens'/>
        <Button onPress={()=>setScreen('ModalScreens')} title='Practica ModalScreens'/>
        <Button onPress={()=>setScreen('BottomSheetScreens')} title='Practica BottomSheetScreens'/> 
        <Button onPress={()=>setScreen('TextScreens')} title='Practica Alert'/> 
        <Button onPress={()=>setScreen('Repaso1Screen')} title='Repaso1Screen'/> 
      </View>
    )

    }
   
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#1c304eff',
    alignItems: 'center', //trabaja en el eje X (start izquierda, end derecha)
    justifyContent: 'center',//trabaja en el eje Y (start arriba end abajo)
    marginTop:15
  },
  titulo:{
    
  }
})