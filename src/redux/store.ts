import {
    configureStore
  } from '@reduxjs/toolkit';
  import home from './slices/Home';
  import lang from './slices/Langs';
  
  export const store = configureStore({
    reducer: {
      home,
      lang
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
    devTools: process.env.NODE_ENV !== 'production',
  })
  
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch
  