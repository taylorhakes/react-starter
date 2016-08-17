'use strict';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import reducers from './reducers';
import epics from './epics';

function createReduxStore() {
    return createStore(
        combineReducers(reducers),
        compose(
            applyMiddleware(createEpicMiddleware(combineEpics(...epics))),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    )
}


export default createReduxStore;