import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import React, {useState} from 'react';

/*
1. git init
2. git status
3. git add .
4. git commit -m 
5. git tag
6. git log 00_0*/

export default function App() {
  const equipos = ["Equipo 1", "Equipo2", "Equipo3"];
  const jugadores = [[{nombre: "Jugador 1.1", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" }, 
                      {nombre: "Jugador 1.2", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" }, 
                      {nombre: "Jugador 1.3", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" }],

                    [{nombre: "Jugador 2.1", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" }, 
                    {nombre: "Jugador 2.2", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" }, 
                    {nombre: "Jugador 2.3", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" }],

                    [{nombre: "Jugador 3.1", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" }, 
                    {nombre: "Jugador 3.2", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png" }, 
                    {nombre: "Jugador 3.3", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" }],]

  /*                  
  const imagenes = ["https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  ]*/
  
  const [equipoSeleccionado, setequipoSeleccionado] = useState(0);
  const [jugadorSeleccionado, setjugadorSeleccionado] = useState(0);
  const [imagenSeleccionada, setimagenseleccionada] = useState(jugadores[0][0].imagen); //Eso es para que salga por defecto el primer equipo, con el primer jugador y la imagen (al iniciar la aplicación)

  //La funcion handleEquipoClick lo que hace es poner por defecto el equipo, el primer jugador y la imagen (una vez se haya entrado y navegado a otras pestañas)
  const handleEquipoClick = (equipoIndex) => {
      setequipoSeleccionado(equipoIndex);
      setjugadorSeleccionado(0);
      setimagenseleccionada(jugadores[equipoIndex][0].imagen);
    
  }

  return (
    <View style={styles.container}>
      <Header equipos={equipos} setequipoSeleccionado={setequipoSeleccionado} equipoSeleccionado={equipoSeleccionado} handleEquipoClick={handleEquipoClick}></Header>
      <Body jugadores={jugadores} equipoSeleccionado={equipoSeleccionado} jugadorSeleccionado={jugadorSeleccionado} setjugadorSeleccionado={setjugadorSeleccionado} imagenSeleccionada={imagenSeleccionada} setimagenseleccionada={setimagenseleccionada}></Body>
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
