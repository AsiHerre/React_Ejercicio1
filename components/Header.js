import { StyleSheet, Text, TouchableOpacity, View, Platform, Image } from 'react-native';
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
  const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';

  return (
    <View>
      {isMobile ? (
        <View style={styles.mobileHeader}>
          {!equipoSeleccionado ? ( 
            equipos.map((equipo, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleEquipoClick(index)}
                style={[
                  styles.mobileEquipo,
                  index === 0 && styles.mobileEquipoFirst,
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
  // ORDENADOR
  header: {
    borderWidth: 2,
    borderColor: '#000000',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  equipo: {
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#000000',
    padding: 10,
    margin: 10
  },
  equipoHovered: {
    borderColor: '#1E2021',
    borderWidth: 5,
    borderRadius: 10
  },
  equipoSeleccionado: {
    backgroundColor: '#3C9AC9'
  },

  // MOVIL
  mobileEquipo: {
    borderWidth: 3,
    padding: 10,
    margin: 10,
  },

  mobileEquipoFirst: {
    marginTop: 46,
  },

  mobileEquipoText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },

  viewEquipo: {
    marginTop: 40,
    backgroundColor: '#3C9AC9',
    borderWidth: 3,
    padding: 10,
    margin: 10,
    textAlign: 'center'
  },

  textEquipo: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
