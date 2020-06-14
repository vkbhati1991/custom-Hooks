
function setSessionStorage(data) {
    sessionStorage.setItem("mnTokenValid", data);
}

function getSessionStorage() {
    return sessionStorage.getItem("mnTokenValid");
}

function removeSessionStorage() {
    sessionStorage.removeItem("mnTokenValid");
}

function isLogging() {
    if ("mnTokenValid" in sessionStorage) {
        return true;
    }
    return false;
}

function getAuthrozitationHeader() {

    const AuthStr = 'Bearer ' + getSessionStorage();

    return {
        'headers': {
            'Authorization': AuthStr,
            'Content-Type': 'application/json'
        }
    }
}

export { setSessionStorage, getSessionStorage, removeSessionStorage, isLogging, getAuthrozitationHeader };