import React from 'react';
import { HeroesList } from '../heroes/HeroesList';

const Dc = () => {
    return (
        <>
            <h1>DC screen</h1>
            <hr/>
            <HeroesList publisher={'DC Comics'}/>
        </>
    );
};

export default Dc;
