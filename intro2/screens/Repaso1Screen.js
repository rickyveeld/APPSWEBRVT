import { Text, StyleSheet, View, ImageBackground,Button,TextInput,Alert,Switch} from 'react-native'
import React, { useState } from 'react'

export default function Repaso1Screen () {
const [correo, setCorreo] = useState('')
const[nombre, setNombre] = useState('')
const [aceptaTerminos, setAceptaTerminos] = useState(false)
const [contador, setContador] = useState(0)
const validarCorreo = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const hacerRegistro = () => {
    // Validar campos vacios
    if (!correo.trim() || !nombre.trim()) {
      Alert.alert('Error', 'Por favor ingresa todos los datos requeridos')
      return
    }

    // Validar formato de correo
    if (!validarCorreo(correo)) {
      Alert.alert('Error', 'Correo no valido')
      return
    }

    // Validar terminos y condiciones
    if (!aceptaTerminos) {
      Alert.alert('Error', 'Debes aceptar los terminos y condiciones')
      return
    }

    // Si todas las validaciones pasan
    setContador(contador + 1)
    Alert.alert('Exito', 'Registro completado correctamente')
  }
    return (
<ImageBackground
      source={require('../assets/fondito.jpg')}
      resizeMode='cover' //fondo completo es la mas usada
      style = {styles.background}
     
      >
        
             
     
        <View style = {styles.cuadro}>
            <Text style={styles.texto}>Registro de usuario</Text>
            <TextInput
        style={styles.input}
                    placeholder="Ingresa tu correo"
                    value={correo}
                    onChangeText={setCorreo}
        />
         <TextInput
          style={styles.input}
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChangeText={setNombre}
        />
        <View style={styles.terminosContainer}>
  <Text style={styles.terminosText}>Acepto terminos y condiciones</Text>
  <Switch
    value={aceptaTerminos}
    onValueChange={setAceptaTerminos}
    style={styles.switch}
  />
</View>
        <View style={styles.contenedorBotones}>
        <Button color="grey"title='Registrarse'   onPress={() => hacerRegistro()}>

            
        </Button>
         </View>


            </View>
            
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
 background:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  width:'100%',
  height:'100%',
  resizeMode:'cover',
  },
  contenedorBotones:{
      marginTop: 40 ,
    },
cuadro:{
    width: 450,
    height:400,
    backgroundColor:'#ffffffc4',
    justifyContent: 'center',    // Centra verticalmente
    alignItems: 'center', 
},
texto:{
    fontFamily:"Times New Roman",
      fontSize:40,
      color:'#02021bff',
      fontWeight:'bold',
      fontStyle:'italic',
      justifyContent:'center',
},input:{
    width:'60%',
    borderWidth:2,
    borderColor:'#2296e9ef',
    borderRadius:8,
    padding:10,
    marginBottom:10,
    backgroundColor:'#6eaac2ff',
    justifyContent:'center',
    textAlign: 'center',  

},
switch:{
transform:[{scaleX: 1.0},{scaleY:1.0}]
},




})