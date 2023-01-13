import {
    DECREASE_COUNT,
    INCREASE_COUNT,

} from "./actionTypes";

export const ACTION_HANDLERS = {

    [INCREASE_COUNT]:  (state, action) =>
        Object.assign({}, state, {
            number: action.payload.number,
        }),
    [DECREASE_COUNT]:  (state, action) =>
        Object.assign({}, state, {
            number: action.payload.number,
        }),
};