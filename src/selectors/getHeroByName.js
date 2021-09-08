import { heroes } from '../data/heroes';

export const getHeroByName = (name = '') => {
    if (name === '') {
        return [];
    }

    name = name.toUpperCase();
    return heroes.filter((h) => h.superhero.toUpperCase().includes(name));
};
