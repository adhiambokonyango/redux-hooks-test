import React, {useEffect, useState} from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import {decreaseCount, increaseCount} from "../store/counter/actions"
import PropTypes from 'prop-types';
 function FirstView(props) {
     const number = useSelector(state => state.counter_item.number)

     const dispatch = useDispatch();
     let [value, setValue] = useState(0)
     let [isNeeded, setNeeded] = useState(89)

     useEffect( () => {
         // TODO DISPATCH ACTION WITHOUT PASSING THROUGH PROPS:  dispatch(decreaseCount(isNeeded))
         // TODO: SOURCE: https://scriptverse.academy/tutorials/reactjs-useselector-usedispatch.html

          setValue(number)
     }, [number]);
     let subtract = () =>{
        // props.decreaseCount(value)
         dispatch(decreaseCount(value))
     }
     let add = () =>{
         props.increaseCount(value)
     }
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={subtract}> Subtract </button><br/><br/>
            <button onClick={add}>
                Increment counter FV
            </button><br/><br/>
            <button onClick={() => dispatch(decreaseCount(value))}>test dispatch</button>
        </div>
    )
}
FirstView.propTypes = {
    number: PropTypes.number,
    increaseCount: PropTypes.func.isRequired,
    decreaseCount: PropTypes.func.isRequired,
};

export default FirstView;