import { StyleSheet, Text, View, Image, Platform } from 'react-native';
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
  const equipos = ["Equipo 1", "Equipo2", "Equipo3", "Equipo 4", "Equipo 5"];
  const jugadores = [[{nombre: "Jugador 1.1", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/112.svg" }, 
                      {nombre: "Jugador 1.2", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/131.svg" }, 
                      {nombre: "Jugador 1.3", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/105.svg" },
                      {nombre: "Jugador 1.4", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/133.svg" },
                      {nombre: "Jugador 1.5", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/134.svg" }],

                    [{nombre: "Jugador 2.1", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/135.svg" }, 
                    {nombre: "Jugador 2.2", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/136.svg" }, 
                    {nombre: "Jugador 2.3", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/39.svg" },
                    {nombre: "Jugador 2.4", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/138.svg" },
                    {nombre: "Jugador 2.5", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/63.svg" }],

                    [{nombre: "Jugador 3.1", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/140.svg" }, 
                    {nombre: "Jugador 3.2", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/141.svg" }, 
                    {nombre: "Jugador 3.3", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/142.svg" },
                    {nombre: "Jugador 3.4", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/143.svg" },
                    {nombre: "Jugador 3.5", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/144.svg" }],
                    
                    [{nombre: "Jugador 4.1", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/145.svg" }, 
                    {nombre: "Jugador 4.2", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/146.svg" }, 
                    {nombre: "Jugador 4.3", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/147.svg" },
                    {nombre: "Jugador 4.4", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/148.svg" },
                    {nombre: "Jugador 4.5", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/149.svg" }],
                    
                    [{nombre: "Jugador 5.1", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/186.svg" }, 
                    {nombre: "Jugador 5.2", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/213.svg" }, 
                    {nombre: "Jugador 5.3", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/152.svg" },
                    {nombre: "Jugador 5.4", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/153.svg" },
                    {nombre: "Jugador 5.5", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/154.svg" }],]

  
  const [equipoSeleccionado, setequipoSeleccionado] = useState(0);
  const [jugadorSeleccionado, setjugadorSeleccionado] = useState(0);
  const [imagenSeleccionada, setimagenseleccionada] = useState(jugadores[0][0].imagen); //Eso es para que salga por defecto el primer equipo, con el primer jugador y la imagen (al iniciar la aplicación)
  const [hoveredIndex, setHoveredIndex] = useState(null); //Estado para añadir el hover a los equipos y jugadores
  const [mostrarJugadores, setMostrarJugadores] = useState(false);
  const [mostrarEquipos, setMostrarEquipos] = useState(false);

  //La funcion handleEquipoClick lo que hace es poner por defecto el equipo, el primer jugador y la imagen (una vez se haya entrado y navegado a otras pestañas)
  const handleEquipoClick = (equipoIndex) => {
    setequipoSeleccionado(equipoIndex);
    setjugadorSeleccionado(0);
    setimagenseleccionada(jugadores[equipoIndex][0].imagen);
  }
  

  const handleMobileEquipoClick = (equipoIndex) => {
    setequipoSeleccionado(equipoIndex); // Establece equipoSeleccionado en dispositivos móviles
    setjugadorSeleccionado(0);
  }

  //Funcíon para ejecutar cuando el puntero esta encima de un equipo/jugador
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  }

  //Función que ejecuta cuando el puntero sale del elemento posicionado del equipo/jugador
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  }

  return (
    <View style={styles.container}>
      <Header 
        equipos={equipos} 
        equipoSeleccionado={equipoSeleccionado} 
        hoveredIndex={hoveredIndex} 
        setequipoSeleccionado={setequipoSeleccionado} 
        setMostrarEquipos={setMostrarEquipos}
        setMostrarJugadores={setMostrarJugadores}
        handleEquipoClick={handleEquipoClick} 
        handleMobileEquipoClick={handleMobileEquipoClick}
        handleMouseEnter={handleMouseEnter} 
        handleMouseLeave={handleMouseLeave}>
      </Header>
      <Body 
        mostrarEquipos={mostrarEquipos}
        jugadores={jugadores} 
        equipoSeleccionado={equipoSeleccionado}
        jugadorSeleccionado={jugadorSeleccionado} 
        imagenSeleccionada={imagenSeleccionada} 
        hoveredIndex={hoveredIndex} 
        mostrarJugadores={mostrarJugadores}
        setjugadorSeleccionado={setjugadorSeleccionado} 
        setimagenseleccionada={setimagenseleccionada}
        handleMouseEnter={handleMouseEnter} 
        handleMouseLeave={handleMouseLeave}>
      </Body>

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
