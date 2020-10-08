import { getHeroeById, getHeroesByConsultora } from '../base/08-imp-exp';
import '@testing-library/jest-dom';
import Heroes from '../data/heroes'
describe('Pruebas en funciones de Heroes', () => {
    test('Debe de retornar un Heroe por ID', () => {
        const userId = 1;
        const heroe = getHeroeById(userId);
        const heroesData = Heroes.find(h => h.id === userId);
        expect(heroe).toEqual(heroesData);
    });

    test('Debe de retornar un Undefined Heroe', () => {
        const usrID = 999;
        const expectedHeroe = getHeroeById(usrID);
        const Heroe = Heroes.find(h => h.id === usrID);
        expect(expectedHeroe).toEqual(Heroe);
    });

    test('Debe de retornar un arreglo de los Heroes de DC', () => {
        const consultora = 'DC'
        const expectedHeroes = getHeroesByConsultora(consultora);
        const toBeHeroes = Heroes.filter(h => h.owner === consultora);
        expect(expectedHeroes).toEqual(toBeHeroes);
    });

    test('Debe de retornar el total de los Heroes de Marvel', () => {
        const consultora = 'MARVEL';
        const expectedHeroes = getHeroesByConsultora(consultora);
        const toBeHeroes = Heroes.filter(h => h.owner === consultora);
        expect(expectedHeroes.length).toBe(toBeHeroes.length);
    });



})
