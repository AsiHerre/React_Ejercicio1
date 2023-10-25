import { StyleSheet, Text, View, Image } from 'react-native';


export default function Jugador() {
  return(
        <View style={styles.jugador}>
          <Image source={require('../assets/Imagen_futbolista.png')} style={styles.perfil}></Image>
        </View>
)};


const styles = StyleSheet.create({
    jugador: {
      flex: 1,
      borderWidth: 2,
      borderColor: "#000000",
      padding: 10,
    },

    perfil: {
      flex: 1,
      borderWidth: 2,
    },
});