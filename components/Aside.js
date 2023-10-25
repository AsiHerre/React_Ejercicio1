import { StyleSheet, Text, View } from 'react-native';
import Jugadores from './Jugadores';

export default function Aside() {
  const jugadores = ["Jugador 1.1", "Jugador 1.2", "Jugador 1.3", "Jugador 1.4", "Jugador 1.5"];
  return(
      <View style={styles.asideStyle}>
        {jugadores.map((jugador) => (
          <Jugadores jugador={jugador} />
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