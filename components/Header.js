import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Header({ equipos, equipoSeleccionado, handleEquipoClick }) {
  //const
  return (
    <View style={styles.headerStyle}>
      {equipos.map((equipo, index) => (
        <TouchableOpacity key={index} onPress={() => handleEquipoClick(index)} style={[styles.equipo, index == equipoSeleccionado && {backgroundColor: "#3C9AC9"}]}>
          <Text>{equipo}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}



const styles = StyleSheet.create({
    headerStyle: {
        borderWidth: 2,
        borderColor: '#000000',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    
      },
      equipo: {
        fontSize: 16,
        borderWidth: 2,
        borderColor: '#000000',
        padding: 10,
        margin: 10,
        fontWeight: 'bold',
      },


});
