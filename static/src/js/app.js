import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import '../css/app.css'

if (module.hot) module.hot.accept()

render( <App/>, document.querySelector("#app"));
