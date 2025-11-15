import { Text, StyleSheet, View,FlatList,ScrollView,SectionList } from 'react-native'


export default function FlatListScreens () {
const datos = [
  {id:'1', nombre:'manzana'},
  {id:'2', nombre:'platano'},
  {id:'3', nombre:'naranja'},
  {id:'4', nombre:'uva'},
  {id:'5', nombre:'fresa'},
  {id:'6', nombre:'sandia'},
]
const secciones = [
  {
    titulo:'frutas',
    data:[
      {nombre:'manzana'},
      {nombre:'platano'},
      {nombre:'naranja'},
      {nombre:'uva'},
    ]
  },
  {
    titulo:'verduras',
    data:[
      {nombre:'zanahoria'},
      {nombre:'lechuga'},
      {nombre:'tomate'},
      {nombre:'brocoli'},
    ]
  }
]
    return (
     <ScrollView style={styles.container}>
 <View style={styles.content}>
  <Text style={styles.titulo}>FlatList</Text>

 <FlatList
 data={datos}
 keyExtractor={(item)=>itwm.id}
 renderItem={({item})=>(
  <View style={styles.elementos}>
    <Text style={styles.text}> {item.nombre}</Text>

  </View>
 )}
 />

 </View>

     </ScrollView>

    )
  
}

const styles = StyleSheet.create({})