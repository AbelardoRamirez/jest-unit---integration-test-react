import { getSaludo } from '../base/02-template-string'
//Importar la Auto Ayuda


describe('Pruebas en el archivo 02-template-string.test.js', () => {
    test('getSaludo(){...} debe de retornar hola Abelardo', () => {
        const nombre = 'Abelardo';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe(`Hola ${nombre}!`);
    })

});
