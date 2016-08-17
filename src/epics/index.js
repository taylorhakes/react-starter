'use strict';

import { BUTTON_CLICK } from '../actions';

const testEpic = (action$, store) =>
    action$.ofType(BUTTON_CLICK).map(() => ({
        type: 'TEST_END'
    }));

export default [testEpic];