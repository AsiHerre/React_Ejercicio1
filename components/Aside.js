import { StyleSheet, Text, View } from 'react-native';
import Jugadores from './Jugadores';

export default function Aside() {
  return(
      <View style={styles.asideStyle}>
        <Jugadores jugadoresName="Jugador 1.1"></Jugadores> 
        <Jugadores jugadoresName="Jugador 1.2"></Jugadores> 
        <Jugadores jugadoresName="Jugador 1.3"></Jugadores> 
        <Jugadores jugadoresName="Jugador 1.4"></Jugadores> 
        <Jugadores jugadoresName="Jugador 1.5"></Jugadores> 
    </View>
)};


const styles = StyleSheet.create({
  asideStyle: {
    borderWidth: 2,
    borderColor: "#000000",
    width: 200
  },
});