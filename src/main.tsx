import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { Provider } from 'react-redux'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'

import './index.css'
import { store } from './redux/store.ts'
import { BrowserRouter } from 'react-router-dom'
import { barangApi } from './redux/slices/apiSlice.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ApiProvider api={barangApi}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApiProvider>
  </Provider >,
)
