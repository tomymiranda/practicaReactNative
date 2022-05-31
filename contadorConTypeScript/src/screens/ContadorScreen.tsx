/* eslint-disable react-native/no-inline-styles *//* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
const ContadorScreen = () => {
    const [contador, setContador] = useState(10);

    return (
      //con flex:1 se hace que el contenedor ocupa todo el espacio disponible
      // position relative es el defecto de los componentes
      //el styles es como css, mejora la visualizacion
      <View style={styles.container}>
        <Text style={styles.title}>El valor del contador es: {contador}</Text>
        <TouchableOpacity
          style={styles.botonIncrementarPosicion}
          onPress={() => setContador(contador + 1)}>
          <View style={styles.botonIncrementar}>
            <Text style={styles.textBotonIncrementar}>+1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botonDecrementarPosicion}
          onPress={() => setContador(contador - 1)}>
          <View style={styles.botonDecrementar}>
            <Text style={styles.textBotonDecrementar}>-1</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
};
export default ContadorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 46,
    top: -10,
  },
  botonIncrementar: {
    backgroundColor: '#5856D6',
    borderRadius: 100,
    width: 60,
    height: 60,
    //el justifyContent: 'center' hace que el hijo( o componente
    // que esta dentro o texto) se centre respecto a el.
    justifyContent: 'center',
  },
  textBotonIncrementar: {
    color: 'white',
    //el alignItems: 'center' hace que el texto se centre respecto a el.
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  botonIncrementarPosicion: {
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
  botonDecrementarPosicion: {
    position: 'absolute',
    bottom: 24,
    left: 24,
  },
  botonDecrementar: {
    backgroundColor: '#5856D6',
    borderRadius: 100,
    width: 60,
    height: 60,
    //el justifyContent: 'center' hace que el hijo( o componente
    // que esta dentro o texto) se centre respecto a el.
    justifyContent: 'center',
  },
  textBotonDecrementar: {
    color: 'white',
    //el alignItems: 'center' hace que el texto se centre respecto a el.
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
