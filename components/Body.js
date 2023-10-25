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
});