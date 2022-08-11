import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './index.css'

import { compose } from 'redux'
import { Provider } from 'react-redux'
import { store } from './store/store'

// adding Redux DevTools
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

