import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './ducks/counter';

// every single reducer need to be added to this store - i.e. a list (store)
export default configureStore({
    reducer: {
        counter: counterReducer
    }
});
