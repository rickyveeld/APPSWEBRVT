import { Text, StyleSheet, View, Buttonw } from 'react-native'
import React from 'react'

export default function BotonesScreens () {

    return (

 
      <View>
        <Text>Proximamente </Text>
        <Button
        title = 'amarillo'
        onPress={()=>cambiarColor('yellow')}
        ></Button>
       <Button
        title = 'azul'
        onPress={()=>cambiarColor('blue')}
        ></Button>
        <Button
        title = 'rojo'
        onPress={()=>cambiarColor('red')}
        ></Button>





      </View>
    )
}

const styles = StyleSheet.create({})