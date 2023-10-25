import { StyleSheet, Text, View } from 'react-native';


export default function Jugadores(props) {
  return(
      <View>
        <Text style={styles.jugadores}>{props.jugadoresName}</Text>
      </View>
)};


const styles = StyleSheet.create({
    jugadores: {
      fontSize: 16,
      borderWidth: 2,
      borderColor: '#000000',
      padding: 10,
      margin: 10,
      fontWeight: 'bold',
    },
});