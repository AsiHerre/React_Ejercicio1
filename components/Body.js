import { StyleSheet, Text, View, Image } from 'react-native';
import Aside from './Aside';
import Jugador from './Jugador';

export default function Body() {
    return(
        <View style={styles.bodyStyle}>
          <Aside> </Aside>
          <Jugador></Jugador>
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