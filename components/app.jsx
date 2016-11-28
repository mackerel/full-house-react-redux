import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from '../store'
import Household from './household' //component

let reactElement = document.getElementById('react')

render(
    <Provider store={store}>
        <Household />
    </Provider>,
    reactElement
)
