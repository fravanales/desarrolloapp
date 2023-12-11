import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Alert } from 'react-native';
//Importar Firebase
import appFirebase from '../credenciales'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoct} from 'firebase/firestore'
const db = getFirestore(appFirebase)

export default function CreateProduct(props) {
  const initialState = {
    rut:'',
    nombre:'',
    apellido_materno:'',
    apellido_paterno:'',
    comuna:'',
    direccion:'',
    numero:'',
    region:'',
    telefono:'',
  }
  const [state, setState]= useState(initialState)
    
  const handleChangeText = (value, name)=>{
    setState({...state,[name]:value})
  }

  const saveProduct =async()=>{
    try{
      await addDoc(collection(db, 'productos'),{
        ...state
      })

      Alert.alert('Alerta', 'guardado con exito')
      //console.log(state)
       props.navigation.navigate('List')
    }
    catch{
      console.error(error)
    }

  }

  return (
   <ScrollView style={styles.container}>
    <Text style={styles.titulo}>Crear Persona</Text>

    <View style={styles.inputgroup}>
      <TextInput placeholder='Rut' value={state.rut} onChangeText={(value)=>handleChangeText(value, 'rut')}/>
    </View>

    <View style={styles.inputgroup}>
      <TextInput placeholder='Nombre' value={state.nombre} onChangeText={(value)=>handleChangeText(value, 'nombre')}/>
    </View>

    <View style={styles.inputgroup}>
      <TextInput placeholder='Apellido paterno' value={state.apellido_paterno} onChangeText={(value)=>handleChangeText(value, 'apellido_paterno')}/>
    </View>

    <View style={styles.inputgroup}>
      <TextInput placeholder='Apellido materno' value={state.apellido_materno} onChangeText={(value)=>handleChangeText(value, 'apellido_materno')}/>
    </View>

    <View style={styles.inputgroup}> 
      <TextInput placeholder='Direccion' value={state.direccion} onChangeText={(value)=>handleChangeText(value, 'direccion')}/>
    </View>

    <View style={styles.inputgroup}> 
      <TextInput placeholder='Numero' value={state.numero} onChangeText={(value)=>handleChangeText(value, 'numero')}/>
    </View>

    <View style={styles.inputgroup}>
      <TextInput 
      placeholder='Comuna' value={state.comuna} onChangeText={(value)=>handleChangeText(value, 'comuna')}/>
    </View>

    <View style={styles.inputgroup}>
      <TextInput placeholder='Region' value={state.region} onChangeText={(value)=>handleChangeText(value, 'region')}/>
    </View>

    <View style={styles.inputgroup}>
      <TextInput placeholder='Telefono' value={state.telefono} onChangeText={(value)=>handleChangeText(value, 'telefono')}/>
    </View>

    <View>
      <Button title='Guardar Persona' onPress={saveProduct}/>
    </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  titulo:{
    textAlign:'center',
    fontSize:18,
    marginTop:12,
    marginBottom:20
  },  
  container:{
    flex:1,
    padding:35
  },  
  inputgroup:{
    flex:1,
    padding:0,
    marginBottom:20,
    borderBottomWidth:1,
    borderBottomColor:'#cccccc'
  },
});