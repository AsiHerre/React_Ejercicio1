import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Header({ equipos, equipoSeleccionado, handleEquipoClick, hoveredIndex, handleMouseEnter, handleMouseLeave }) {
  //const
  return (
    <View style={styles.headerStyle}>
      {equipos.map((equipo, index) => (
        <TouchableOpacity 
        key={index} 
        onPress={() => handleEquipoClick(index)} 
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
        style={[styles.equipo, 
        equipoSeleccionado === index && styles.equipoSeleccionado,
        hoveredIndex === index && styles.equipoHovered]}>
          <Text style={styles.texto}>{equipo} </Text>
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

      texto: {
        fontWeight: 'bold'
      },

      equipo: {
        borderWidth: 2,
        borderColor: '#000000',
        padding: 10,
        margin: 10,
      },

      equipoHovered: {
        borderColor: "#1E2021",
        borderWidth: 5,
        borderRadius: 10,
      },

      equipoSeleccionado: {
        backgroundColor: "#3C9AC9"
      }
});
