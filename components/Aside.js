import { StyleSheet, Text, View } from 'react-native';
import Jugadores from './Jugadores';
import React, {useState} from 'react';

//El orden para mostrar las imagenes es: App / Body / Aside / Jugadores / Perfil

export default function Aside( {jugadores, equipoSeleccionado, jugadorSeleccionado, setjugadorSeleccionado, setimagenseleccionada }) {
  const listaSeleccionada=jugadores[equipoSeleccionado];
  
  return(
      <View style={styles.asideStyle}>
        {listaSeleccionada.map((jugador, index) => (
          <Jugadores key={index} index={index} jugador={jugador.nombre} imagenesJugador={jugador.imagen} jugadorSeleccionado={jugadorSeleccionado} setjugadorSeleccionado={setjugadorSeleccionado} setimagenseleccionada={setimagenseleccionada}/>
        ))}
    </View>
)};


const styles = StyleSheet.create({
  asideStyle: {
    borderWidth: 2,
    borderColor: "#000000",
    width: 200
  },
});