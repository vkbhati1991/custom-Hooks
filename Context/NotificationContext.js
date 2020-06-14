import React from "react";

const notificationContext = React.createContext();

export default notificationContext;

export const NotificationProvider = notificationContext.Provider;