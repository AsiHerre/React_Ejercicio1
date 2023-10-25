import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

/*
1. git init
2. git status
3. git add .
4. git commit -m 
5. git tag
6. git log 00_0*/

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    borderWidth: 2,
    borderColor: '#000000',

  },
});
