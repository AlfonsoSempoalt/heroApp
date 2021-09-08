import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import HeroCard from './HeroCard';

export const HeroesList = ({ publisher }) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <main className='row row-cols-1 row-cols-md-3 g-4
                         animate_animated animate_fadeIn'>
            {heroes.map((hero) => (
                <HeroCard key={hero.id} {...hero} />
            ))}
        </main>
    );
};
