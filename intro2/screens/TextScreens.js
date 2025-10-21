import { Text, StyleSheet, View,Button, TextInput,Alert } from 'react-native'
import React, { useState } from 'react'
import { setStatusBarBackgroundColor } from 'expo-status-bar'

export default function TextScreens  (){
const[nombre, setNombre] = useState('')
const[password, setPassword] = useState('')
const[telefono, setTelefono] = useState('')
const mostrarAlerta = ()=>{
    if(nombre.trim()===''||password.trim()===''||telefono.trim()===''){
        Alert.alert("Error favor de llenar todos los campos (movil)");
        alert("Error favor de llenar todos los campos (web)")
    }
else {
    Alert.alert("Datos ingresados\n"+`Nombre: ${nombre}\n
        Password: ${password}\n
        Telefono: ${telefono}` );
        alert("Datos ingresados"+`Nombre: ${nombre}\n
        Password: ${password}\n
        Telefono: ${telefono}` );
}

    }
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>TextScreens & Alert</Text>
        <Text>Nombre:</Text>
        <TextInput style={styles.input}
        placeholder='escribe tu nombre aqui'
        value = {nombre}
        onChangeText={setNombre}
        />
          <Text>TextScreens & Alert</Text>
        <Text>Password:</Text>
        <TextInput style={styles.input}
        placeholder='escribe tu contraseña'
        secureTextEntry={true}
        value = {password}
        onChangeText={setPassword}
        />
          <Text>TextScreens & Alert</Text>
        <Text>telefono:</Text>
        <TextInput style={styles.input}
        placeholder='escribe tu telefono'
        value = {telefono}
        onChangeText={setTelefono}
        />
        <Button
        title='Mostrar alerta'
        onPress={mostrarAlerta}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    },
titulo:{
    fontFamily:'Times New Roman',
    fontSice: 25,
    color:'blue',
    fontWeight:'bold',
    textDecorationLine:'underline',
    marginBottom:20,
},
etiquetas:{
    fontSice:10,
    marginBottom:5,
    marginTop:10,
},
input:{
    width:'50%',
    borderWith:2,
    borderColor:'#2390deff',
    borderRadius:8,
    padding:10,
    marginBottom:10,
    backgroundColor:'#10516bff'
}

    
    

})