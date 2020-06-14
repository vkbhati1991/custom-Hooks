import React from 'react';
import {
    Redirect
} from 'react-router-dom'

import { removeSessionStorage } from "../Authentication/index";

export const Logout = () => {
    removeSessionStorage();
    return <Redirect to="/" />
}
