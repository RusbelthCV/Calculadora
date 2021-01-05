import React, { Component } from 'react';
import "../assets/css/calculadora.css";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state={
            pantalla: "0",
            resultado: 0
        };
        this.ponerNumeros = this.ponerNumeros.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.calculate = this.calculate.bind(this);
        this.clearAll = this.clearAll.bind(this);
    }
    clearAll = () => {
        this.setState({
            pantalla: "0",
            resultado: 0
        });
    }
    calculate = () =>{
        let pantalla = this.state.pantalla;
        let resultado = eval(pantalla);
        this.setState({
            pantalla: resultado,
            resultado: 0
        });
    }
    handleClick = (e) =>{
        let valorBoton = e.target.innerText;
        let pantalla = document.getElementsByClassName("textDiv")[0].textContent;
        if(pantalla === "0"){
            pantalla = ""
            pantalla += valorBoton;
        }
        else{
            pantalla += valorBoton;
        }
        this.setState({pantalla: pantalla})
        if(e.target.dataset.action){
            if(e.target.dataset.action === "clear"){
                this.clearAll();
            }
        }
        else{
            
        }
    }
    ponerNumeros = () =>{
        let numeros = [7,8,9,4,5,6,1,2,3,0];
        return (numeros.map((element, key)=>{
            return(
            <button key={key} onClick = {this.handleClick}>
                {element}
            </button>)
        }))
    }
    render() {
        return (
        <div className = "container">
            <div className="textDiv">{this.state.pantalla}</div>
            <button className="key--operator" data-action="add" onClick={this.handleClick}>+</button>
            <button className="key--operator" data-action="subtract" onClick={this.handleClick}>-</button>
            <button className="key--operator" data-action="multiply" onClick={this.handleClick}>*</button>
            <button className="key--operator" data-action="divide" onClick={this.handleClick}>/</button>
            {this.ponerNumeros()}
            <button data-action="decimal" onClick={this.handleClick}>.</button>
            <button data-action="clear" onClick={this.handleClick}>AC</button>
            <button className="key--equal" data-action="calculate" onClick={this.calculate}>=</button>
        </div>
        
        )
        
    }
}

export default Calculator;