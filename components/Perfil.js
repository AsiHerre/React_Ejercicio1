import { StyleSheet, Text, View, Image } from 'react-native';

//El orden para mostrar las imagenes es: App / Body / Aside / Jugadores / Perfil
//platform OS

export default function Perfil({ imagenSeleccionada }) {
  return(
        <View style={styles.perfil}>
          <Image source={{uri: imagenSeleccionada}} style={styles.imagenPerfil}></Image>
        </View>
)};


const styles = StyleSheet.create({
  perfil: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagenPerfil: {
    width: '32%',
    aspectRatio: 1,
    resizeMode: 'contain',
  },
});
