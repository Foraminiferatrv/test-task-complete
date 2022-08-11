import {  configureStore } from "@reduxjs/toolkit"
import { raceMiddleware } from "../middleware/raceMiddleware"
import { raceSlice } from "./slices/raceSlice"

export const store = configureStore({
  reducer: {
    race: raceSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    (getDefaultMiddleware().concat(raceMiddleware)) // Adding middleware to connect to the web socket
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch