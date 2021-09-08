import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router';
import { getHeroById } from '../../selectors/getHeroById';
import { History } from 'history';

interface ChildComponentProps {
    history: History;
}

const HeroScreen: React.FC<ChildComponentProps> = ({ history }) => {
    const { heroId } = useParams<any | string>();
    const hero = useMemo(() => getHeroById(heroId), [heroId]);
    if (!hero) {
        return <Redirect to='/' />;
    }

    const handleRedirect = () => {
        if (history.length <= 2) {
            history.push('/');
        } else {
            history.goBack();
        }
    };

    const { superhero, publisher, alter_ego, first_appearance, characters } =
        hero;

    return (
        <>
            <main className='row mt-5'>
                <section className='col-4 animate_animated animate__fadeInLeft'>
                    <img
                        src={`../assets/heroes/${heroId}.jpg`}
                        alt={superhero}
                        className='img-thumbnail'
                    />
                </section>
                <section className='col-8'>
                    <h3>{superhero}</h3>
                    <ol className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <b>Alter ego: </b>
                            {alter_ego}
                        </li>
                        <li className='list-group-item'>
                            <b>Publisher: </b>
                            {publisher}
                        </li>
                        <li className='list-group-item'>
                            <b>First appearance: </b>
                            {first_appearance}
                        </li>
                    </ol>

                    <h5 className='mt-3'>Characters</h5>
                    <p>{characters}</p>

                    <button
                        className='btn btn-outline-info'
                        onClick={handleRedirect}
                    >
                        Return
                    </button>
                </section>
            </main>
        </>
    );
};

export default HeroScreen;
