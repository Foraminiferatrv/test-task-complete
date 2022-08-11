import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved
} from '@testing-library/react'
import {
  Provider
} from 'react-redux'
import App from './App'
import { store } from './store/store'

test('renders race chart', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  await waitForElementToBeRemoved(() => screen.getByLabelText(/loading/i))

  await waitFor(() => screen.getAllByLabelText(/horse-list-item/i))

  const horse = screen.queryAllByLabelText(/horse-list-item/i)

  expect(horse[0]).toBeInTheDocument()
})