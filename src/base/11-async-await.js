

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getUsersAsync = async () => {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const usrs = response.json();

        return usrs;
    } catch (err) {
        return `Error al obtener datos de Https://Www.`;
        //console.error(err);
    }
}
export const getUsersErrorAsync = async () => {

    try {
        const response = await fetch('https://jjsonplaceholder.typicode.com/api/users');
        const usrs = response.json();
        return usrs;
    } catch (err) {
        throw new Error(err);
        //console.error(err);
    }
}