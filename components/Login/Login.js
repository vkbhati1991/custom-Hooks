import React from 'react';
import { LoginImage } from "./LoginImage";
import { LoginContent } from "./LoginContent";
import { LoginForm } from "./LoginForm";
import { removeSessionStorage } from "../Authentication/index";

export const Login = (props) => {
    removeSessionStorage();
    return (
        <div className="login-container">
            <div className="login-row">
                <LoginImage />
                <div className="login-form bg-white">
                    <div className="login-contnet">
                        <LoginContent />
                        <LoginForm {...props}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
