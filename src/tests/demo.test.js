describe('Pruebas en el archivo demo.test.js', () => {
    test('Deben de ser iguales los string', () => {
        const msj1 = 'Hola Mundo';
        const msj2 = 'Hola Mundo';
        expect(msj1).toBe(msj2);
    });
});
