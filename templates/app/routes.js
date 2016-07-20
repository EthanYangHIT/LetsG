import React from 'react';
import {Route} from 'react-router';
import Home from '../components/Home';
import App from '../components/App';
import Test from '../components/Test';

export default(
    <Route component={App}>
        <Route path='/' component={Home}/>
        <Route path='/new' component={Test}/>
    </Route>
);