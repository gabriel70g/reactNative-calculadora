import React from 'react';
import {Text, View} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import {styles} from '../themes/appTheme';
import {useCalculadora} from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
    numeroAnterior,
    numero,
    limpiar,
    positivoNegativo,
    btnDelete,
    btnDividir,
    arnarNumero,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculadora();
  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      {/* fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="C" action={limpiar} />
        <BotonCalc texto="+/-" action={positivoNegativo} />
        <BotonCalc texto="del" action={btnDelete} />
        <BotonCalc texto="/" color="#ff9427" action={btnDividir} />
      </View>
      {/* fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="7" action={arnarNumero} />
        <BotonCalc texto="8" action={arnarNumero} />
        <BotonCalc texto="9" action={arnarNumero} />
        <BotonCalc texto="X" color="#ff9427" action={btnMultiplicar} />
      </View>

      {/* fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="4" action={arnarNumero} />
        <BotonCalc texto="5" action={arnarNumero} />
        <BotonCalc texto="6" action={arnarNumero} />
        <BotonCalc texto="-" color="#ff9427" action={btnRestar} />
      </View>

      {/* fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="1" action={arnarNumero} />
        <BotonCalc texto="2" action={arnarNumero} />
        <BotonCalc texto="3" action={arnarNumero} />
        <BotonCalc texto="+" color="#ff9427" action={btnSumar} />
      </View>

      {/* fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="0" ancho action={arnarNumero} />
        <BotonCalc texto="." action={arnarNumero} />
        <BotonCalc texto="=" color="#ff9427" action={calcular} />
      </View>
    </View>
  );
};
