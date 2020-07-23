import React from 'react'
import { connect } from 'react-redux';
import CounterOutput from "../components/CounterOutput";
import CounterControl from "../components/CounterControl";
class Counter extends React.Component{
    render(){
        return(
            <div> <CounterOutput value={this.props.ctr}/>
            <CounterControl label="Increment" clicked={this.props.onIncrement}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{ctr : state.counter}
};
const mapDispatchToProps = (dispatch) => {
    return{ onIncrement : () => dispatch({type: 'INCREMENT', value: 1}), }
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);