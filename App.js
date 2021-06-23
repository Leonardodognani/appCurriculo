import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/Feather';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

import fotoEu from './image/fotoEu.jpeg';
import Card from './image/components/Card/index';



const App = () => {

  function handleRedeSocial(redes_social){

    switch(redes_social){
      case 'linkedin':
        Alert.alert('Meu LinkedIn' , 'https://www.linkedin.com/in/leonardodognani/')
      break  
      case 'github':
        Alert.alert('Meu GitHub' , 'https://github.com/Leonardodognani')
      break  
      case 'facebook':
        Alert.alert('Meu Facebook' , 'https://www.facebook.com/leonard.dewar111/')
      break  
    }
  }

  return (
    <>
    <View style={style.page}>
      <View style={style.container_cabecalho}>
        <Image source={fotoEu} style={style.fotoEu} />
        <Text style={style.nome}>LEONARDO DOGNANI</Text>
        <Text style={style.funcao}>Estudante Dev</Text>
        <View style={style.redes_sociais}>
          <TouchableOpacity onPress={()=> handleRedeSocial('github')}>
          <Icon name="github" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> handleRedeSocial('linkedin')}>
          <Icon name="linkedin" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> handleRedeSocial('facebook')}>
          <Icon name="facebook" size={30} />
          </TouchableOpacity>        
        </View>
      </View>

    <Card titulo="Informações Pessoais">
      <Text style={style.card_content_text}>Descrição de perfil</Text>
      <Text style={style.card_content_text}>Hobbies</Text>
      <Text style={style.card_content_text}>Aspirações</Text>
    </Card>
    <Card titulo="Habilidades Profissionais">
      <Text style={style.card_content_text}>Linguagens de programação</Text>
      <Text style={style.card_content_text}>Habilidades interpessoais</Text>
      <Text style={style.card_content_text}>Qualidades</Text>
    </Card>

    </View>
    </>
  );
};


const style = StyleSheet.create ({

  page:{
    backgroundColor: '#e7e7e7',
    flex: 1,
    
  },

  container_cabecalho: {
    
    alignItems: 'center',
    justifyContent:'center',  
    marginTop: 30,
  },

  fotoEu: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },

  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
  },

  funcao: {
    color: 'black',
    marginBottom: 10,
  },

  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 3,
  },

  card_content_text: {
    color: "#939393",
    marginBottom: 10,
    textAlign: 'center',

  },

})


export default App;