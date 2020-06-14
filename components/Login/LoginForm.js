import React, { useContext } from 'react';
import notificationContext from "../../Context/NotificationContext";
import { MnForm } from '../../MnForm/MnForm';
import { LoginFormFields } from "./LoginFields";
import { LoginFormLayout } from "./LoginFormLayout";
import { model } from "./LoginModal";
import { setSessionStorage } from "../Authentication/index";
import axios from "axios";


export const LoginForm = (props) => {

    let errorStatus = false;
    const { showAlert } = useContext(notificationContext);
    const { history } = props;

    function onSuccess(response) {
        if (response.statusCode !== "Invalid" && !errorStatus) {
            setSessionStorage(response.data);
            history.push("/Dashboard");
        } else {
            errorStatus = true;
            showAlert("danger login-invalid-alert fixed tp-20 tc", "Please Check Email-id and Password -- Invalid Login Attempt!!!");
        }
    }

    function onSubmit(data) {
        axios.post('/api/Login', data)
            .then(function (response) {
                errorStatus = false;
                onSuccess(response.data);
            })
            .catch(function () {
                errorStatus = true;
            });
    }


    return (
        <React.Fragment>
            <MnForm
                fields={LoginFormFields}
                postData={model}
                layout={LoginFormLayout}
                handleOnSubmit={onSubmit}
                actions={[{
                    text: "Login",
                    className: "button button--brand",
                    type: "submit",
                    href: null
                },
                {
                    text: "Forget password?",
                    className: "forgotpass mh-16",
                    type: "link",
                    href: null
                }]}
            />
        </React.Fragment>
    );
}