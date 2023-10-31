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
  const jugadores = [[{nombre: "Jugador 1.1", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/130.svg" }, 
                      {nombre: "Jugador 1.2", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/131.svg" }, 
                      {nombre: "Jugador 1.3", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg" }],

                    [{nombre: "Jugador 2.1", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/133.svg" }, 
                    {nombre: "Jugador 2.2", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/134.svg" }, 
                    {nombre: "Jugador 2.3", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/135.svg" }],

                    [{nombre: "Jugador 3.1", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/136.svg" }, 
                    {nombre: "Jugador 3.2", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/137.svg" }, 
                    {nombre: "Jugador 3.3", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/138.svg" }],]

  /*                  
  const imagenes = ["https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  ]*/
  
  const [equipoSeleccionado, setequipoSeleccionado] = useState(0);
  const [jugadorSeleccionado, setjugadorSeleccionado] = useState(0);
  const [imagenSeleccionada, setimagenseleccionada] = useState(jugadores[0][0].imagen); //Eso es para que salga por defecto el primer equipo, con el primer jugador y la imagen (al iniciar la aplicación)
  //const [hoveredIndex, setHoveredIndex] = useState(null);

  //La funcion handleEquipoClick lo que hace es poner por defecto el equipo, el primer jugador y la imagen (una vez se haya entrado y navegado a otras pestañas)
  const handleEquipoClick = (equipoIndex) => {
      setequipoSeleccionado(equipoIndex);
      setjugadorSeleccionado(0);
      setimagenseleccionada(jugadores[equipoIndex][0].imagen);
  }

  /*
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  }*/

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
