'use strict';

import { routerReducer } from 'react-router-redux';
import { BUTTON_CLICK } from '../actions';

function count(state = 0, action) {
    switch (action.type) {
        case BUTTON_CLICK:
            return state + 2;
        default:
            return state;
    }
}

export default {
    count,
    routing: routerReducer
};