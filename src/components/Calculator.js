import React, { Component } from 'react';
import "../assets/css/calculadora.css";
import Functions from './Functions';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.ponerNumeros = this.ponerNumeros.bind(this);
    }
    ponerNumeros = () =>{
        let numeros = [7,8,9,4,5,6,1,2,3,0];
        return (numeros.map((element, key)=>{
            return(
            <button key={key}>
                {element}
            </button>)
        }))
    }
    render() {
        <Functions add = {this.add}/>
        return (
        <div className = "container">
            <div className="textDiv">0</div>
            <button className="key--operator" data-action="add">+</button>
            <button className="key--operator" data-action="subtract">-</button>
            <button className="key--operator" data-action="multiply">&times;</button>
            <button className="key--operator" data-action="divide">÷</button>
            {this.ponerNumeros()}
            <button data-action="decimal">.</button>
            <button data-action="clear">AC</button>
            <button className="key--equal" data-action="calculate" onClick={Functions.add()}>=</button>
        </div>
        )
    }
}

export default Calculator;