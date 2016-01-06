import React from 'react'
import { Route, IndexRoute} from 'react-router'
import Information from '../containners/index'

import App from '../containners/App'

export default (
    <Route path="/">
        <IndexRoute
            component={App}
        />
        <Route
            path="information"
            component={Information}>
        </Route>

    </Route>
)