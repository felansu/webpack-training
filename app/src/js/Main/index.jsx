import React from 'react';
import {Route, Switch} from 'react-router-dom';

import ComponentA from '../ComponentA';
import ComponentB from '../ComponentB';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={ComponentA}/>
            <Route path='/componentB' component={ComponentB}/>
        </Switch>
    </main>
);

export default Main;