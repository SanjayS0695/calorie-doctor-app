import 'regenerator-runtime/runtime';
import 'core-js/stable';
import FoodItemSaga from './FoodItemsSaga';
import { all, fork } from 'redux-saga/effects';

export default function* () {
    yield all([fork(FoodItemSaga)]);
}
