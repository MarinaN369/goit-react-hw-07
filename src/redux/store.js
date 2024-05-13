import { configureStore } from "@reduxjs/toolkit";
import { reducerPhonebook } from "./contactsSlice";
import { filtersReducer} from "./filtersSlice";
// import { persistStore, 
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { devToolsEnhancer } from "@redux-devtools/extension";

// const persistConfig = {
//   key: 'phonebook',
//   storage,
// };


export const store = configureStore(

{
  
  reducer: {
  // phonebook: persistReducer(persistConfig, reducerPhonebook),
  phonebook: reducerPhonebook,
  filters: filtersReducer,
},
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
    });

    // export const persistor = persistStore(store);
