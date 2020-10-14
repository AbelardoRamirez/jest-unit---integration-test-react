import { getUsersAsync, getUsersErrorAsync } from '../base/11-async-await'
import '@testing-library/jest-dom';

describe('Pruebas en 11-async-await', () => {
    test('Debe de traer todos los usuarios', async () => {
        const usuarios = await getUsersAsync();
        expect(usuarios.length).toBe(10);
    });
    test('Debe de dar error al obtener los usuarios', async () => {
        const response = await getUsersErrorAsync();
        console.log(response);
        expect(true).toBe(false);
    })

})
