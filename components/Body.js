import { StyleSheet, Text, View, Image } from 'react-native';
import Aside from './Aside';
import Perfil from './Perfil';

//El orden para mostrar las imagenes es: App / Body / Aside / Jugadores / Perfil

export default function Body( { jugadores, equipoSeleccionado, jugadorSeleccionado, setjugadorSeleccionado, setimagenseleccionada, imagenSeleccionada}) {

    return(
        <View style={styles.bodyStyle}>
          <Aside jugadores={jugadores} equipoSeleccionado={equipoSeleccionado} jugadorSeleccionado={jugadorSeleccionado} setjugadorSeleccionado={setjugadorSeleccionado} setimagenseleccionada={setimagenseleccionada}> </Aside>
          <Perfil imagenSeleccionada={imagenSeleccionada} jugadorSeleccionado={jugadorSeleccionado} equipoSeleccionado={equipoSeleccionado}></Perfil>
      </View>
)};

const styles = StyleSheet.create({
    bodyStyle: {
      flexDirection: 'row',
      borderWidth: 2,
      borderColor: '#000000',
      flex: 1,
    },
    
    asideStyle: {
      borderWidth: 2,
      borderColor: "#000000",
      width: 200
    },
      
    jugador: {
      flex: 1,
      borderWidth: 2,
      borderColor: "#000000",
      padding: 10,
    },
  
    jugadores: {
      fontSize: 16,
      borderWidth: 2,
      borderColor: '#000000',
      padding: 10,
      margin: 10,
      fontWeight: 'bold',
    },
  
    perfil: {
      flex: 1,
      borderWidth: 2,
    },
  
  });