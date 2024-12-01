import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'; // Import persist functions
import storage from 'redux-persist/lib/storage'; // Local storage as the storage engine
import userReducer from '../redux/user/UserSlice';

// Redux persist config
const persistConfig = {
  key: 'root',
  version: 1,
  storage,  // Use localStorage (or sessionStorage depending on your setup)
};

// Combine reducers (only if you have multiple reducers)
const rootReducer = combineReducers({
  user: userReducer, // Ensure this matches your slice name
});

// Apply persistReducer to rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure Redux store
const Store = configureStore({
  reducer: persistedReducer,  // Use persisted reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create persistor for syncing state to storage
const persistor = persistStore(Store);

export { Store, persistor }; // Export both the store and persistor for use in your app
