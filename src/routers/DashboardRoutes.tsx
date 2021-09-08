import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Dc from '../components/DC/Dc';
import HeroScreen from '../components/heroes/HeroScreen';
import Marvel from '../components/Marvel/Marvel';
import SearchScreen from '../components/Search/SearchScreen';
import { Navbar } from '../components/ui/NavBar';

const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <main className='container mt-3'>
                <Switch>
                    <Route exact={true} path='/marvel' component={Marvel} />
                    <Route
                        exact={true}
                        path='/hero/:heroId'
                        component={HeroScreen}
                    />
                    <Route exact={true} path='/dc' component={Dc} />
                    <Route exact={true} path='/searchHero' component={SearchScreen} />
                    <Redirect to={'/marvel'} />
                </Switch>
            </main>
        </>
    );
};

export default DashboardRoutes;
