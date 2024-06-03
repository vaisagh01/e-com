import { combineReducers, configureStore } from '@reduxjs/toolkit'
import logReducer from '../redux/slice'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'
import persistStore from 'redux-persist/es/persistStore'
import cartReducer from '../redux/cart'

const rootReducer = combineReducers({logger:logReducer, cart:cartReducer})

const persistConfig = {
    key:'root',
    version:1,
    storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false,
    }),
})
export const persistor = persistStore(store);