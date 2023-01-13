import {
    STORE_USER,
    BEGIN_USER_AUTHENTIFICATION,

    USER_LOGIN_SUCCESS,
    AN_ERROR_OCCURED_DURING_LOGIN,
    RESET_WRONG_CREDENTIALS,
    WRONG_LOGIN_CREDENTIALS,
    STORE_ADMIN,
    STORE_OFFICE_ADMINISTRATOR, LOGOUT

} from "./actionTypes";
import {
    apiGetAll,
    apiPost
} from "../../../services/api_connector/ApiConnector";


export function resetWrongCredentials() {
    return async dispatch => {
        dispatch({
            type: RESET_WRONG_CREDENTIALS
        });
    };
}



export function authenticateSystemUser(payload) {
    return async dispatch => {
        dispatch({
            type: BEGIN_USER_AUTHENTIFICATION
        });
        const apiRoute = "/versions/officer_log_in";
        const returnedPromise = apiPost(payload, apiRoute);
        returnedPromise.then(
            function(result) {
                if (!result.data.error) {
                    dispatch({
                        type: STORE_USER,
                        payload: {
                            isLoginSuccessful:true,
                            session_details: result.data,
                            isSessionActive: true
                        }
                    });
                    dispatch({
                        type: USER_LOGIN_SUCCESS
                    });
                }
            },
            function(err) {
                /*
                console.log( err.response.data)
                console.log( err.message)
code: "ERR_NETWORK"
config: {transitional: {…}, transformRequest: Array(1), transformResponse: Array(1), timeout: 0, adapter: ƒ, …}
message: "Network Error"
name: "AxiosError"
request: XMLHttpRequest {data: undefined, onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, …}
response: XMLHttpRequest {data: undefined, onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, …}

                 */
                dispatch({
                    type: AN_ERROR_OCCURED_DURING_LOGIN,
                    payload: {
                        errorObject: err,
                        isLoginSuccessful:false,
                    }
                });
            }
        );
    };
}



