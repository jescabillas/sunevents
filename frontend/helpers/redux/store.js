import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userTokenReducer from './userToken'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const combinedReducer = combineReducers({
  userToken: userTokenReducer,
})

const persistedReducer = persistReducer(persistConfig, combinedReducer)

export const store = configureStore({
  reducer: {
    persist: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
