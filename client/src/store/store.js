import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slice';
import AdminProductsSlice from './admin/products-slice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        adminProducts: AdminProductsSlice, // Ensure the key matches what you use in useSelector
    },
});

export default store;
