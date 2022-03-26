import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/CryptoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';
import { localNewsApi } from '../services/LocalNewsApi';

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [localNewsApi.reducerPath]: localNewsApi.reducer,
  },
});
