import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Home}>
            <Route path="/repos" component={Repos}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('app'));