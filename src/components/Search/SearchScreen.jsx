import React, { useMemo } from 'react';
import { useForm } from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { getHeroByName } from '../../selectors/getHeroByName';

const SearchScreen = ({ history }) => {
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    const [formValues, handleInputChange] = useForm({
        searchHero: q,
    });

    const { searchHero } = formValues;
    const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (searchHero.trim().length > 2) {
            history.push(`?q=${searchHero}`);
        }
    };

    return (
        <>
            <h1>Search screen</h1>
            <hr />
            <section className='row'>
                <div className='col-5'>
                    <h4>Search form</h4>
                    <hr />
                    <form onSubmit={handleOnSubmit}>
                        <input
                            type='text'
                            placeholder='Search a hero'
                            className='form-control'
                            value={searchHero}
                            onChange={handleInputChange}
                            name='searchHero'
                        />
                        <button
                            type='submit'
                            className='btn m-1 btn-block btn-outline-primary'
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className='col-7'>
                    <h4>Results</h4>
                    <hr />
                    {(q==='') &&
                                <section className='alert alert-info'>
                                    Search a hero
                                </section>
                    
                    }
                    {(q !== '' && heroesFiltered.length===0)  &&
                                <section className='alert alert-info'>
                                    that hero does not exist
                                </section>
                    
                    }
                    {heroesFiltered.map((hero) => (
                        <HeroCard key={hero.id} {...hero} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default SearchScreen;
