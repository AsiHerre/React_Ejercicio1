import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';


//BODY: MENU DE JUGADORES, para que cambien de jugadores y el color
//El orden para mostrar las imagenes es: App / Body / Aside / Jugadores / Perfil

export default function Jugadores(props) {
  const ejecutarImagen = (data) => {
    props.setimagenseleccionada(data);
  }
  return(
      <View>     
        <TouchableOpacity onPress={ () => {props.setjugadorSeleccionado(props.index), ejecutarImagen(props.imagenesJugador)}}>
          <Text style={[styles.jugadores, props.index == props.jugadorSeleccionado && {backgroundColor: "#3C9AC9"}]}>{props.jugador} </Text>
        </TouchableOpacity>
      </View>
)};


const styles = StyleSheet.create({
    jugadores: {
      fontSize: 16,
      borderWidth: 2,
      borderColor: '#000000',
      padding: 10,
      margin: 10,
      fontWeight: 'bold',
    },
});