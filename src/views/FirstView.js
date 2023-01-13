import React, {useEffect, useState} from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import {decreaseCount, increaseCount} from "../store/counter/actions"
import PropTypes from 'prop-types';
 function FirstView(props) {
     const number = useSelector(state => state.counter_item.number)

     const dispatch = useDispatch();
     let [value, setValue] = useState(0)

     useEffect( () => {
          setValue(number)
         console.log("number", number)
     }, [number]);

   let subtract = () =>{
         props.decreaseCount(value)
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
        </div>
    )
}
FirstView.propTypes = {
    number: PropTypes.number,
    increaseCount: PropTypes.func.isRequired,
    decreaseCount: PropTypes.func.isRequired,
};

export default FirstView;