import {
    DECREASE_COUNT,
    INCREASE_COUNT,


} from "./actionTypes";





export function increaseCount(number) {
    return async dispatch => {
        dispatch({
            type: INCREASE_COUNT,
            payload: {
                number: number + 1,

            }
        });
    };
}
export function decreaseCount(number) {
    return async dispatch => {
        dispatch({
            type: DECREASE_COUNT,
            payload: {
                number: number - 1,

            }
        });
    };
}




