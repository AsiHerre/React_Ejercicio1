import { StyleSheet, Text, View, Image } from 'react-native';

//El orden para mostrar las imagenes es: App / Body / Aside / Jugadores / Perfil
//platform OS

export default function Perfil({ imagenSeleccionada }) {
  return(
        <View style={styles.jugador}>
          <Image source={{uri: imagenSeleccionada}} style={styles.perfil}></Image>
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
      maxWidth: 700,
    },
});