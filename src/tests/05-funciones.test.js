import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../base/05-funciones';
describe('Pruebas en 05-funciones', () => {
    test('Debe de ', () => {
        const _expectedUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const usr = getUser();

        expect(usr).toEqual(_expectedUser);
    });

    test('Debe de traer el usuario activo', () => {
        const usrActivoExpected = {
            uid: 'ABC567',
            username: `AbelardoJS`
        };
        const usuarioActivo = getUsuarioActivo(usrActivoExpected.username);
        expect(usuarioActivo).toEqual(usrActivoExpected);
    });

})
