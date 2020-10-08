// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
import Heroes from '../data/Heroes';

// console.log( owners );




export const getHeroeById = (id) => Heroes.find((heroe) => heroe.id === id);

// console.log( getHeroeById(2) );

export const getHeroesByConsultora = (consultora) => Heroes.filter(h => h.owner === consultora);

// console.log( getHeroesByOwner('Marvel') );

export const getHeroes = () => Heroes;