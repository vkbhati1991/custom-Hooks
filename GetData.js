import { useState, useEffect } from "react";
import { getAuthrozitationHeader } from "../components/Authentication/index";
import axios from "axios";

function useGetData(url) {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const token = getAuthrozitationHeader();

    useEffect(() => {
        let isCancelled = false;
        axios.get(url, token)
            .then(function (response) {
                if (!isCancelled) {
                    setData(response.data);
                }
            })
            .catch(function (error) {
                if (!isCancelled) {
                    setError(error);
                }
            });
        return () => isCancelled = true;
    }, [url]);

   

    return {
        data: data,
        error: error
    }

}

export { useGetData };