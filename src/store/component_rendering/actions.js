import {
 LAUNCH_ADMIN_PAGE,


} from "./actionTypes";





export function launchAdminPage() {
    return async dispatch => {
        dispatch({
            type: LAUNCH_ADMIN_PAGE,
            payload: {
                adminPageLaunched:true,

            }
        });
    };
}




