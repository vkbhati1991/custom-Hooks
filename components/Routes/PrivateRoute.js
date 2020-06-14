import React from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'

import { isLogging } from "../Authentication/index";


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => isLogging() ? <Component {...props} /> : <Redirect to="/" />} />
);

export { PrivateRoute };