import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Main from './routes/Main'
import './styles/css/jqvmap.min.css'
import './styles/css/swiper.css'
import './styles/scss/style.scss'
import './styles/scss/typ.scss'

// Render Setup ------------------------------------
const MOUNT_NODE = document.getElementById('app')
let render = () => {
  ReactDOM.render(
    <BrowserRouter>
    <Main/>
  </BrowserRouter>, MOUNT_NODE)
}

// Development Tools ------------------------------------
if (__DEV__) {
  if (module.hot) {
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default

      ReactDOM.render(
        <RedBox error={error}/>, MOUNT_NODE)
    }

    render = () => {
      try {
        renderApp()
      } catch (e) {
        console.error(e)
        renderError(e)
      }
    }

    // Setup hot module replacement
    module
      .hot
      .accept(['./routes/Main'], () => setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      }))
  }
}

// Let's Go! ------------------------------------
render()
