import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter'

// this store keeps the increment and decrement count - other feature will have another store.js
export default configureStore({
    reducer: {
        counter: counterReducer
    }
});