import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './RouteWrapper';
import Exemplo from '../pages/home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Exemplo} />
            </Switch>
        </BrowserRouter>
    );
}
