/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {Text, View, Button} from 'react-native';
const ContadorScreen = () => {
    const [contador, setContador] = useState(10);

    return (
      //con flex:1 se hace que el contenedor ocupa todo el espacio disponible
      // position relative es el defecto de los componentes
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 46,
            top: -10,
          }}>
          El valor del contador es: {contador}
        </Text>
        <Button
          onPress={(() => setContador( contador + 1))}
          title="Contar"
          color="#841584"
        />
      </View>
    );
};
export default ContadorScreen;


