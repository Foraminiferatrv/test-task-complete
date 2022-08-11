import classes from './App.module.scss'

import { ErrorBoundary } from 'react-error-boundary'

import { RaceWindow } from './containers/RaceWindow/RaceWindow'
import { Header } from './containers/Header/Header'
import { ErrorFallback } from './components/UI/ErrorFallback/ErrorFallback'


function App() {

  return (
    <div className={classes.App}>
      <Header />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}>
        <RaceWindow />
      </ErrorBoundary>
    </div>
  )
}

export default App
