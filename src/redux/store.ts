import {
    configureStore
  } from '@reduxjs/toolkit';
  import home from './slices/Home';
  import lang from './slices/Langs';
  import mission from './slices/Mission';
  import service from './slices/Service';
  import team from './slices/Team';
  import region from './slices/Region';
  import news from './slices/News';
  import contact from './slices/Contact';
  import social from './slices/SocialMedia';
  import about from './slices/About';
  
  export const store = configureStore({
    reducer: {
      home,
      lang,
      mission,
      service,
      team,
      region,
      news,
      contact,
      social,
      about
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
    devTools: process.env.NODE_ENV !== 'production',
  })
  
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch
  