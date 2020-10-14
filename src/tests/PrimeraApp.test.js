import React from 'react';
import { render } from '@testing-library/react'
import PrimeraApp from '../base/PrimeraApp';

//Ejemplo con Jest
describe('Prueba de <PrimeraApp/>', () => {
    test('Debe de Mostrar el Mensaje "Hola soy Gokun"', () => {
        const saludo = 'Hola, soy gokun';
        const { getByText, } = render(<PrimeraApp saludo={saludo} />);
        expect(getByText(saludo + '!!!')).tobeInTheDocument();
    });

})
