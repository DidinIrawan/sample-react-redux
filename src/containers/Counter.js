import React from 'react'
import { connect } from 'react-redux';
import CounterOutput from "../components/CounterOutput";
import CounterControl from "../components/CounterControl";
class Counter extends React.Component{
    state={
        inputOne:'',
        inputTwo:''
    }
    onChangeInput=(e)=>{
        let name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }
    render(){
        return(
            <div>
                <CounterOutput value={this.props.ctr}/>
                <div style={{marginLeft:10,float:"center",display:'flex',flexDirection:'row',alignItems:'center',marginTop: 10}}>
                    <input type="number" name="inputOne" value={this.state.inputOne} onChange={this.onChangeInput}/>
                    <input type="number" name="inputTwo" value={this.state.inputTwo} onChange={this.onChangeInput}/>
                    <CounterControl label="+" clicked={()=> this.props.addition(this.state.inputOne,this.state.inputTwo)}/>
                    <CounterControl label="-" clicked={()=> this.props.subtraction(this.state.inputOne,this.state.inputTwo)}/>
                    <CounterControl label="*" clicked={()=> this.props.multiplication(this.state.inputOne,this.state.inputTwo)}/>
                    <CounterControl label="/" clicked={()=> this.props.division(this.state.inputOne,this.state.inputTwo)}/>
                </div>


            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{ctr : state.counter}
};
const mapDispatchToProps = (dispatch) => {
    return{ 
        addition : (inputOne,inputTwo) => dispatch({type: 'ADDITION', inputOne: inputOne, inputTwo: inputTwo}),
        subtraction : (inputOne,inputTwo) => dispatch({type: 'SUBTRACTION', inputOne: inputOne, inputTwo: inputTwo}),
        multiplication : (inputOne,inputTwo) => dispatch({type: 'MULTIPLICATION', inputOne: inputOne, inputTwo: inputTwo}),
        division : (inputOne,inputTwo) => dispatch({type: 'DEVISION', inputOne: inputOne, inputTwo: inputTwo}),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);