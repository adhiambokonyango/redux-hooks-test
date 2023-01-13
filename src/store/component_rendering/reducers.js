import {
   LAUNCH_ADMIN_PAGE,

} from "./actionTypes";

export const ACTION_HANDLERS = {


    [LAUNCH_ADMIN_PAGE]:  (state, action) =>
        Object.assign({}, state, {
            adminPageLaunched: true,
        }),
};