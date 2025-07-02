import { combineReducers, configureStore } from "@reduxjs/toolkit";
import languageReducer from '../Slices/languageSlice'
import productsReducer from '../Slices/productsSlice'
import cartReducer from '../Slices/cartSlice'
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
    cart: cartReducer,
    language: languageReducer, 
    products: productsReducer
})

const persistConfig = { 
    key: 'root',
    storage,
    blacklist: ['products']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const Store = configureStore({ 
    reducer: persistedReducer,
})

export const persistor = persistStore(Store); 