import { getUsersAsync } from '../base/11-async-await'
import '@testing-library/jest-dom';

describe('Pruebas en 11-async-await', () => {
    test('Debe de traer todos los usuarios', (done) => {
        getUsersAsync().then(resp => {
            console.log(resp);
            expect(resp.length).toBe(10);
            done();
        });
    });

})
