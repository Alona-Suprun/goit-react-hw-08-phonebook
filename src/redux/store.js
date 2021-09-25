import { configureStore, combineReducers } from '@reduxjs/toolkit';
import items from '../redux/contacts/contacts-slice';
import filter from '../redux/contacts/slice-filter';
import error from '../redux/contacts/slice-error';
import authUser from '../redux/authUser/authUser-slice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'authUser',
  storage,
  whitelist: ['token'],
};

const persistedAuthUserReducer = persistReducer(persistConfig, authUser);

const contacts = combineReducers({
  items,
  filter,
  error,
});

export const store = configureStore({
  reducer: {
    contacts,
    authUser: persistedAuthUserReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

const storePersistor = { store, persistor };

export default storePersistor;
