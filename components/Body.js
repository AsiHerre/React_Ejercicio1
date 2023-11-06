import { StyleSheet, Text, View, Image, Platform, Dimensions } from 'react-native';
import Aside from './Aside';
import Perfil from './Perfil';
import Jugadores from './Jugadores';

export default function Body({
  jugadores,
  equipoSeleccionado,
  jugadorSeleccionado,
  setjugadorSeleccionado,
  setimagenseleccionada,
  imagenSeleccionada,
}) {
  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={styles.bodyStyle}>
      {windowWidth >= 600 ? ( // Si el ancho de la pantalla es mayor o igual a 600, muestra la versión de escritorio
        <View style={styles.bodyStyleOrdenador}>
          <Aside
            jugadores={jugadores}
            equipoSeleccionado={equipoSeleccionado}
            jugadorSeleccionado={jugadorSeleccionado}
            setjugadorSeleccionado={setjugadorSeleccionado}
            setimagenseleccionada={setimagenseleccionada}
          />
          <Perfil
            imagenSeleccionada={imagenSeleccionada}
            jugadorSeleccionado={jugadorSeleccionado}
            equipoSeleccionado={equipoSeleccionado}
          />
        </View>
      ) : ( // En otros casos (pantallas más estrechas, es decir, versión móvil), muestra la versión móvil
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

const styles = StyleSheet.create({
  bodyStyle: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#000000',
    flex: 1,
  },

  bodyStyleOrdenador: {
    flexDirection: 'row',
    flex: 1,
  },

  jugadoresVertical: {
    flex: 1,
    flexDirection: 'column',
  },
});
