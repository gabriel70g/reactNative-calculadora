import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../themes/appTheme';

interface Props {
  texto: string;
  color?: string;
  ancho?: boolean;
  action: (numeroTexto: string) => void;
}

export const BotonCalc = ({
  texto,
  color = '#2d2d2d',
  ancho = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(texto)}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 180 : 80,
        }}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.botonTexto,
            color: color === '#9b9b9b' ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
