import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from '../store'

import HouseholdForm from './HouseholdForm' //component

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <HouseholdForm />
            </Provider>
        )
    }
}

export default App;

