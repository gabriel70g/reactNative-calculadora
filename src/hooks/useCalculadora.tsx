import {Operadores} from '../utils/enums';
import {useState, useRef} from 'react';

export const useCalculadora = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('0');

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };
  const ultimaOperacion = useRef<Operadores>();

  const arnarNumero = (numeroTexto: string) => {
    // no aceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') return;
    if (numero.startsWith('0') || numero.startsWith('-0')) {
      // punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);

        // evalua si hay cero y hay un punto
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
        // evaluar si es diferente de cero y no tiene un pnto
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
        // evitar el 0000.0
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const btnDelete = () => {
    let negativo = '';
    let numeroTemp = numero;
    if (numero.includes('-')) {
      negativo = '-';
      numeroTemp = numero.substr(1);
    }
    if (numeroTemp.length > 1) {
      setNumero(negativo + numeroTemp.slice(0, -1));
    } else {
      setNumero('0');
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const cambiarNumPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }

    setNumero('0');
  };

  const btnDividir = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };
  const btnMultiplicar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  };
  const btnSumar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.sumar;
  };
  const btnRestar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.restar;
  };

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`);
        break;
      case Operadores.restar:
        setNumero(`${num2 - num1}`);
        break;
      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`);
        break;
      case Operadores.dividir:
        setNumero(`${num2 / num1}`);
        break;

      default:
        break;
    }
    setNumeroAnterior('0');
  };

  return {
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
  };
};
