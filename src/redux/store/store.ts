import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../APIfeaturesRTKQuery/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";



export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [userApi.reducerPath]: userApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});


export type RootType=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);
