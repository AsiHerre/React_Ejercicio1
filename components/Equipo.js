import { StyleSheet, Text, View } from 'react-native';

export default function Equipo(props) {
  return(
      <View>
        <Text style={styles.equipo}>{props.equipo}</Text>
      </View>
)};


const styles = StyleSheet.create({
  equipo: {
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#000000',
    padding: 10,
    margin: 10,
    fontWeight: 'bold',
  },
});