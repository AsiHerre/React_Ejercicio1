import { StyleSheet, Text, View, Image, Platform, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Jugadores from './Jugadores';

export default function Header({
  equipos,
  equipoSeleccionado,
  handleEquipoClick,
  hoveredIndex,
  handleMouseEnter,
  handleMouseLeave,
}) {
  const windowWidth = Dimensions.get('window').width;

  return (
    <View>
      {windowWidth < 600 ? ( // Si el ancho de la pantalla es menor que 600, muestra la versión móvil
        <View style={styles.mobileHeader}>
          {!equipoSeleccionado ? (
            equipos.map((equipo, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleEquipoClick(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={[
                  styles.mobileEquipo,
                  equipoSeleccionado === index && styles.equipoSeleccionadoMovil,
                  hoveredIndex === index && styles.equipoHoveredMovil
                ]}
              >
                <Text style={styles.mobileEquipoText}>{equipo}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <View style={styles.viewEquipo}>
              <TouchableOpacity>
                <Text style={styles.textEquipo}>{equipos[equipoSeleccionado]}</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      ) : (
        <View style={styles.header}>
          {equipos.map((equipo, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleEquipoClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={[
                styles.equipo,
                equipoSeleccionado === index && styles.equipoSeleccionado,
                hoveredIndex === index && styles.equipoHovered
              ]}
            >
              <Text style={styles.equipoText}>{equipo}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  // Estilos para dispositivos móviles
  mobileHeader: {
    // Estilos para la versión móvil del encabezado
    borderWidth: 2,
    borderColor: '#000000',
    flexDirection: 'column',
    alignItems: 'center',
  },
  mobileEquipo: {
    // Estilos para un equipo en la versión móvil
    borderWidth: 3,
    padding: 10,
    margin: 10,
  },

  mobileEquipoFirst: {
    // Estilos para el primer equipo en la versión móvil
    marginTop: 46,
  },

  mobileEquipoText: {
    // Estilos para el texto del equipo en la versión móvil
    fontWeight: 'bold',
    textAlign: 'center',
  },

  viewEquipo: {
    marginTop: 40,
    backgroundColor: '#3C9AC9',
    borderWidth: 3,
    padding: 10,
    margin: 10,
    textAlign: 'center',
  },

  textEquipo: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },

  equipoHoveredMovil: {
    borderColor: '#1E2021',
    borderWidth: 5,
    borderRadius: 10,
  },
  equipoSeleccionadoMovil: {
    backgroundColor: '#3C9AC9',
  },

  // Estilos para la versión de escritorio
  header: {
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
  },
  equipoHovered: {
    borderColor: '#1E2021',
    borderWidth: 5,
    borderRadius: 10,
  },
  equipoSeleccionado: {
    backgroundColor: '#3C9AC9',
  },
});
