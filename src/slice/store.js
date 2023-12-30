import { persistStore } from 'redux-persist';
import persistedReducer from './persistConfig';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
});

export const persistor = persistStore(store);
