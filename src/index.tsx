import React from 'react'
import ReactDOM from 'react-dom/client'

// Styles
import './scss/index.scss'

//RTK
import { Provider } from 'react-redux'
import { store } from './store'

//Routing
import { BrowserRouter } from 'react-router-dom'

//Components
import { App } from './components/app/app'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter >
    </Provider>
  </React.StrictMode>
)