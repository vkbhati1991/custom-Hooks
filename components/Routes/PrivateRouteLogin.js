import React from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'

import { isLogging } from "../Authentication/index";


const PrivateRouteLogin = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => isLogging() ? <Redirect to="/dashboard" /> : <Component {...props} />} />
);

export { PrivateRouteLogin };