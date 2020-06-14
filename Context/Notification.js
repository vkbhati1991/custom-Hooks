import React, { useState } from "react";
import { NotificationProvider } from "./NotificationContext";

const Notification = ({ children }) => {
    const [showAlert, setShowAlert] = useState(false);
    const [messageType, setMessageType] = useState("info");
    const [message, setMessage] = useState("info");

    setTimeout(()=>{
        setShowAlert(false);
        setMessageType("info");
        setMessage("")
    },4000);

    return (
        <NotificationProvider value={{
            showAlert: (messageType, message) => {
                setShowAlert(true);
                setMessageType(messageType);
                setMessage(message)
            }
        }}>
            {showAlert && (<div className={`alert alert--${messageType} mb3`}>
                <div className="alert__text">{message}</div>
            </div>)}
            {children}
        </NotificationProvider>
    )
}

export default Notification;