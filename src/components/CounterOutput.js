import React from 'react'
const CounterOutput = (props) => {
    return( <div> Current Counter: <h1 style={{marginLeft:20}}>{props.value}</h1> </div> )
}
export default CounterOutput;