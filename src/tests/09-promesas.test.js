import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../base/09-promesas';
import Heroes from '../data/Heroes';

describe('Pruebas de 09-promesas-test.js', () => {
    test('Debe de retornar un Heroe Async ', (done) => {
        const id = 1;
        const toBeHeroe = Heroes.find(h => h.id === id);
        getHeroeByIdAsync(id).then(
            heroeExpected => {
                expect(heroeExpected).toEqual(toBeHeroe);
                done();
            }
        );
    });
    test('Debe de obtener un error si el heroe no existe', (done) => {
        const id = 999;
        getHeroeByIdAsync(id).catch(error => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        });

    });

})
