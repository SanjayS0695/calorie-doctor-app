import { getFoodItemApi, searchFoodItemsApi } from '../../apis';
import {
    setFoodItemSlice,
    setSearchFoodItemsSlice,
} from '../slice/FoodItemsSlice';
import { GET_FOOD_ITEM, SEARCH_FOOD_ITEMS } from '../types/FoodItemsActions';
import { put, takeLatest } from 'redux-saga/effects';

export function* getFoodItemSaga(action) {
    try {
        const foodItem = yield getFoodItemApi(action.payload);
        yield put(setFoodItemSlice(foodItem));
    } catch (error) {
        console.log(error.response);
    }
}

export function* searchFoodItemsSaga(action) {
    try {
        const foodItems = yield searchFoodItemsApi(action.payload);
        yield put(setSearchFoodItemsSlice(foodItems));
    } catch (error) {
        console.log(error.response);
    }
}

export default function* watchFoodItemsAsync() {
    yield takeLatest(GET_FOOD_ITEM, getFoodItemSaga);
    yield takeLatest(SEARCH_FOOD_ITEMS, searchFoodItemsSaga);
}
