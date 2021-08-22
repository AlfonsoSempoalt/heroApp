import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Dc from '../components/DC/Dc';
import HeroScreen from '../components/heroes/HeroScreen';
import Marvel from '../components/Marvel/Marvel';
import { Navbar } from '../components/ui/NavBar';

const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <main>
                <Switch>
                    <Route exact={true} path='/marvel' component={Marvel} />
                    <Route
                        exact={true}
                        path='/hereo/:heroId'
                        component={HeroScreen}
                    />
                    <Route exact={true} path='/dc' component={Dc} />
                    <Redirect to={'/marvel'} />
                </Switch>
            </main>
        </>
    );
};

export default DashboardRoutes;
