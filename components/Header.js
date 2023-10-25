import { StyleSheet, Text, View } from 'react-native';
import Equipo from './Equipo';

export default function Header() {
  const equipos = ["Equipo 1", "Equipo2", "Equipo3"];
  return(
      <View style={styles.headerStyle}>
        {equipos.map((equipo) => (
          <Equipo equipo={equipo} />
        ))}      
      </View>
)};


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
