import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <Text style={styles.equipo}>Equipo1</Text>
        <Text style={styles.equipo}>Equipo2</Text>
        <Text style={styles.equipo}>Equipo3</Text>
      </View>

      <View style={styles.bodyStyle}>
        <View style={styles.asideStyle}>
          <Text style={styles.jugadores}>Jugador 1.1</Text>
          <Text style={styles.jugadores}>Jugador 1.2</Text>
          <Text style={styles.jugadores}>Jugador 1.3</Text>
          <Text style={styles.jugadores}>Jugador 1.4</Text>
          <Text style={styles.jugadores}>Jugador 1.5</Text>
        </View>
        <View style={styles.jugador}>
          <Image source={require('./assets/Imagen_futbolista.png')} style={styles.perfil}></Image>
        </View>
      </View>

      <View style={styles.footerStyle}>
        <Text style={styles.final}>www.equipo.com</Text>
        <Text style={styles.final}>123456789</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    borderWidth: 2,
    borderColor: '#000000',

  },

  headerStyle: {
    borderWidth: 2,
    borderColor: '#000000',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,

  },

  bodyStyle: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#000000',
    flex: 1,
  },

  footerStyle: {
    borderWidth: 2,
    borderColor: '#000000',
    height: 100,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center'
  },

  equipo: {
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#000000',
    padding: 10,
    margin: 10,
    fontWeight: 'bold',
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

  final:{
    fontSize: 16,
    borderWidth: 2,
    padding: 10,
    margin: 10,
    fontWeight: 'bold',
  }

});
