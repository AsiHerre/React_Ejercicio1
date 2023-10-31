import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

//BODY: MENU DE JUGADORES, para que cambien de jugadores y el color
//El orden para mostrar las imagenes es: App / Body / Aside / Jugadores / Perfil

export default function Jugadores(props) {

  const [isHovered, setIsHovered] = useState(false);

  const ejecutarImagen = (data) => {
    props.setimagenseleccionada(data);
  }

  const jugadorStyle = {
    fontSize: 16,
    borderWidth: isHovered ? 5 : 2, // Borde más grande al pasar el mouse
    borderColor: isHovered ? "black" : "black",
    backgroundColor: props.index === props.jugadorSeleccionado ? "#3C9AC9" : "transparent",
    padding: 10,
    margin: 10,
    fontWeight: 'bold',
    borderRadius: isHovered ? 10 : 0
  };

  return(
      <View>     
        <TouchableOpacity onPress={ () => {props.setjugadorSeleccionado(props.index), ejecutarImagen(props.imagenesJugador);
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={jugadorStyle}>
          <Text style={styles.jugadoresText}>{props.jugador}</Text>
        </TouchableOpacity>
      </View>
)};


const styles = StyleSheet.create({
  jugadoresText: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});