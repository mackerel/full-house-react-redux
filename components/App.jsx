import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from '../store'

import HouseholdForm from './HouseholdForm' //component

let reactElement = document.getElementById('react')

render(
    <Provider store={store}>
        <HouseholdForm />
    </Provider>,
    reactElement
)