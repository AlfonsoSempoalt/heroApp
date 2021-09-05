import React from 'react';
import { Link } from 'react-router-dom';

const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    return (
        <>
            <main className='col mb-3'>
                <div className='card h-100'>
                    <img
                        src={`./assets/heroes/${id}.jpg`}
                        className='card-img-top'
                        alt={superhero}
                        style={{ maxWidth: 440, maxHeight: 350 }}
                    />
                    <section className='card-body'>
                        <h5 className='card-title'>{superhero}</h5>

                        <p className='card-text'> {alter_ego}</p>
                        {characters !== alter_ego && (
                            <p className='card-text'> {characters}</p>
                        )}
                        <small className='text-muted'>{publisher}</small>
                        <p className='text-muted'>
                            First appearance: {first_appearance}
                        </p>
                        <Link to={`./hero/${id}`}>Read more...</Link>
                    </section>
                </div>
            </main>
        </>
    );
};

export default HeroCard;
