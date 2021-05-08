import {all} from 'redux-saga/effects';

import {watchLogin} from './user';
/**
 * Adds two numbers together.
 *
 */
export function* rootSaga() {
    yield all([watchLogin()]);
}
