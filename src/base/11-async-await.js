

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getUsersAsync = async () => {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const usrs = response.json();

        return usrs;
        const h3Element = document.createElement('pre');
        h3Element.innerHTML = `<code>${usrs}</code>`;
    } catch (err) {
        return `Error al obtener datos de Https://Www.`;
        //console.error(err);
    }
}