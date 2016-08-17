'use strict';
import ReactDOM from 'react-dom';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './components/app';
import createStore from './create-store';

function renderApp() {
    const store = createStore();

    // Create an enhanced history that syncs navigation events with the store
    const history = syncHistoryWithStore(hashHistory, store)

    ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App} />
            </Router>
        </Provider>,
        document.getElementById('app')
    )
}

export default renderApp;
