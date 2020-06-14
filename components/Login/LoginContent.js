
import React from 'react';

export const LoginContent = () => {
    return (
        <React.Fragment>
            <div className="login-logo">
                <img alt="" className="logo-media" src="assets/images/logo.svg" />
            </div>
            <div className="login-title">
                Welcome to <span className="brand">SchoolNext</span> Management System
                </div>
            <div className="login-subtitle">
                Access to the most powerfull School Management System in the world...
            </div>
            <div className="login-text">Login</div>
        </React.Fragment>
    );
}