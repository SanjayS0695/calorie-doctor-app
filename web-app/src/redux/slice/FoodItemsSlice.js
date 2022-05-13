import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    foodItems: [],
    searchFoodItems: [],
};
const foodItems = createSlice({
    name: 'foodItemsState',
    initialState,
    reducers: {
        setFoodItemSlice: (state, action) => {
            return {
                foodItems: [...state.foodItems, action.payload.data],
            };
        },
        setSearchFoodItemsSlice: (state, action) => {
            return {
                ...state,
                searchFoodItems: action.payload.data,
            };
        },
    },
});

export const { setSearchFoodItemsSlice, setFoodItemSlice } = foodItems.actions;
export default foodItems.reducer;
