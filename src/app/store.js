import { configureStore } from '@reduxjs/toolkit';
import { NewsApi } from '../services/NewsApi';


export default configureStore({
  reducer: {
   
    [NewsApi.reducerPath]: NewsApi.reducer,
   
  },
});
