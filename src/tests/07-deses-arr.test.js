import '@testing-library/jest-dom'
import { retornaArreglo } from '../base/07-deses-arr'
describe('Prueba en 07-des-arr.js', () => {
    test('Debe de ser un arreglo', () => {
        const [letras, numeros] = retornaArreglo();
        //expect(resultado).toEqual(expectedValue);
        console.log(typeof letras);
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string')
        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('string')
    });
})
