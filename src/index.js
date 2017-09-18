import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import store from './store';
import App from './containers/App';

render(
    <Provider store={ store }>
        <BrowserRouter>
            <Route exact path="/" component={App} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);