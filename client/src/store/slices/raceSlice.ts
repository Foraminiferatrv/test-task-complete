import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import type { Horse } from "../../types/types"


interface RaceState {
  horses: Horse[],
  isEstablishingConnection: boolean,
  isConnected: boolean,
  isError: boolean,
  error: Error | null
}

const initialState: RaceState = {
  horses: [],
  isEstablishingConnection: false,
  isConnected: false,
  isError: false,
  error: null
}


const raceSlice = createSlice({
  name: 'race',
  initialState,
  reducers: {
    startConnecting: (state => {
      //Initiating a websocket conection
      state.isEstablishingConnection = true
    }),
    connectionEstablished: (state => {
      state.isConnected = true
      state.isEstablishingConnection = true
    }),
    receiveRaceData: (state, action: PayloadAction<{ horses: Horse[] }>) => {
      //Recieving race data from the websocket
      state.horses = action.payload.horses
    },
    setError: (state, action: PayloadAction<{ error: Error }>) => {
      state.isEstablishingConnection = false
      state.isError = true
      state.error = action.payload.error
    },
  },
})

export const raceActions = raceSlice.actions

export { raceSlice }