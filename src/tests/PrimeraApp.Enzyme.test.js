import React from 'react';
import '@testing-library/jest-dom'
const { shallow } = require("enzyme")
const { default: PrimeraApp } = require("../base/PrimeraApp")

/**
 * Prueba con un SnapShot
 * Se compila la primera vez, se debe de presionar la tecla U para realizar un snapshot de
 * lo que se renderiza & poder compararla con diferentes parametros
 */

describe('Prueba con Enzyme en <PrimeraApp />', () => {
    test('Debe de mostrar <PrimeraApp/> Correctamente', () => {
        const saludo = 'Hola, soy Gokun';
        const lista = [1, 2, 3, 4];
        const wrapper = shallow(<PrimeraApp saludo={saludo} lista={lista} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, Soy Gokun2';
        const lista = [1, 2, 3, 4];
        const subtitulo = 'Mi Subtitulo';
        const wrapper = shallow(<PrimeraApp saludo={saludo} lista={lista} subtitulo={subtitulo} />);
        const textoParrafo = wrapper.find('p').text();
        console.log(textoParrafo);
        expect(textoParrafo).toBe(subtitulo);
    });


});
