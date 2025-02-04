// import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "./authSlice.js";

// const store= configureStore({
//   reducer:{
//     auth: authSlice
//   }
// });
// export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import authSlice from "./authSlice.js";

// // Configuration for redux-persist
// const persistConfig = {
//   key: "auth",      // Key under which the data will be stored in storage (localStorage in this case)
//   storage,     
//   timeout:10000,     // Type of storage
// };

// // Wrap the auth reducer with persistReducer
// const persistedAuthReducer = persistReducer(persistConfig, authSlice);

// const store = configureStore({
//   reducer: {
//     auth: persistedAuthReducer, // Persisted reducer
//     auth: authSlice,
//     post: postSlice,
//   },
// });

// // Export the store and persistor
// export const persistor = persistStore(store);
// export default store;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice.js";
import postSlice from './postSlice.js';
// import socketSlice from "./socketSlice.js"
// import chatSlice from "./chatSlice.js";
// import rtnSlice from "./rtnSlice.js";

import { 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({
    auth:authSlice,
    post:postSlice,
    // socketio:socketSlice,
    // chat:chatSlice,
    // realTimeNotification:rtnSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export default store;