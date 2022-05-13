import { configureStore } from '@reduxjs/toolkit';
import foodItems from './redux/slice/FoodItemsSlice';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './redux/sagas/rootSaga';
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        foodItems,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export default store;
