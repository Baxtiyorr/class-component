import { configureStore } from "@reduxjs/toolkit";

import getDataReducer from './slices/getDataSlice'


const store = configureStore({
    reducer:{
        getData: getDataReducer,
    }
});

export default store