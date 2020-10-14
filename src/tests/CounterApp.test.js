import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../base/CounterApp';
import '@testing-library/jest-dom';

describe('Pruebas en el componente <Counter/>', () => {

    //para no perder el Intelligent Sense de VSCode
    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        //Se utiliza para resetear el componente o preparalo antes de cada prueba
        wrapper = shallow(<CounterApp />);
    })
    test('Debe de mostrar el valor por default de la prop: value en 10', () => {
        const contador = wrapper.find('h3').text().trim();
        expect(contador).toBe('10');
    });

    test('Debe de incrementar el contador a +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const contador = wrapper.find('h3').text().trim();
        expect(contador).toBe('11');
    });

    test('Debe de decrementar el contador a -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const contador = wrapper.find('h3').text().trim();
        expect(contador).toBe('9');
    });

    test('Debe de resetear el contador a 10', () => {
        wrapper.find('button').at(1).simulate('click');
        const contador = wrapper.find('h3').text().trim();
        expect(contador).toBe('10');
    });



});
