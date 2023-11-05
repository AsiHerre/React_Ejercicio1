import { StyleSheet, Text, View, Image, Platform, Dimensions } from 'react-native';
import Aside from './Aside';
import Perfil from './Perfil';
import Jugadores from './Jugadores';

export default function Body( { jugadores, equipoSeleccionado, jugadorSeleccionado, setjugadorSeleccionado, setimagenseleccionada, imagenSeleccionada}) {

  return(
      <View style={styles.bodyStyle}>
        <Aside jugadores={jugadores} equipoSeleccionado={equipoSeleccionado} jugadorSeleccionado={jugadorSeleccionado} setjugadorSeleccionado={setjugadorSeleccionado} setimagenseleccionada={setimagenseleccionada}></Aside>
        <Perfil imagenSeleccionada={imagenSeleccionada} jugadorSeleccionado={jugadorSeleccionado} equipoSeleccionado={equipoSeleccionado}></Perfil>
    </View>
)};

/*
return (
    <View style={styles.bodyStyle}>
      {Platform.OS === 'web' || Platform.OS === 'ios' ? ( // Versión para ordenador
        <View style={styles.ordenadorContainer}>
          <Aside jugadores={jugadores} equipoSeleccionado={equipoSeleccionado} jugadorSeleccionado={jugadorSeleccionado} setjugadorSeleccionado={setjugadorSeleccionado} setimagenseleccionada={setimagenseleccionada}></Aside>
          <Perfil imagenSeleccionada={imagenSeleccionada} jugadorSeleccionado={jugadorSeleccionado} equipoSeleccionado={equipoSeleccionado}></Perfil>
        </View>
      ) : ( // Versión para móvil
        <View style={styles.jugadoresVertical}>
          {jugadores[equipoSeleccionado].map((jugador, index) => (
            <View key={index}>
              <Jugadores
                index={index}
                jugador={jugador.nombre}
                imagenesJugador={jugador.imagen}
                imagenSeleccionada={imagenSeleccionada}
                jugadorSeleccionado={jugadorSeleccionado}
                setjugadorSeleccionado={setjugadorSeleccionado}
                setimagenseleccionada={setimagenseleccionada}
              />
              <Perfil imagenSeleccionada={imagenSeleccionada} jugadorSeleccionado={jugadorSeleccionado} equipoSeleccionado={equipoSeleccionado}></Perfil>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}
*/

const styles = StyleSheet.create({
  bodyStyle: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#000000',
    flex: 1,
  },
  
  ordenadorContainer: {
    flexDirection: 'row', // Para mantener la apariencia anterior en ordenador
  },
  jugadoresVertical: {
    flex: 1,
    flexDirection: 'column',
  },
});