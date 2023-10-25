import { StyleSheet, Text, View } from 'react-native';


export default function Footer() {
    return(
        <View style={styles.footerStyle}>
            <Text style={styles.final}>www.equipo.com</Text>
            <Text style={styles.final}>123456789</Text>
        </View>
)};


const styles = StyleSheet.create({
    footerStyle: {
        borderWidth: 2,
        borderColor: '#000000',
        height: 100,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    
    final:{
      fontSize: 16,
      borderWidth: 2,
      padding: 10,
      margin: 10,
      fontWeight: 'bold',
    }
  
  });