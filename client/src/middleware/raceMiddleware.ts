import { Middleware } from "@reduxjs/toolkit"
import { io, Socket } from "socket.io-client"
import { raceActions } from "../store/slices/raceSlice"

const raceMiddleware: Middleware = store => {
  let socket: Socket

  return next => action => {
    if (raceActions.startConnecting.match(action)) {
      socket = io(process.env.REACT_APP_API_URL)

      socket.on('connect', () => {
        store.dispatch(raceActions.connectionEstablished())
      })
      socket.emit('start')

      socket.on('ticker', (response) => {
        store.dispatch(raceActions.receiveRaceData({ horses: response }))
      })

      socket.on("connect_error", (error) => {
        store.dispatch(raceActions.setError({ error }))
      })
    }
    try{next(action)}catch(error){}
  }
}

export { raceMiddleware }