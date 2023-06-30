import React, { Component } from "react";
import "./App.css";

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            numero: 0,
            botao: "Iniciar"
        }
        this.timer = null;
        this.iniciar = this.iniciar.bind(this);
        this.limpar = this.limpar.bind(this);
        
        

    }

    iniciar(){
        let state = this.state;

        if(this.timer === null){
            this.timer = setInterval(()=>{
                state.numero += 0.1;
                state.botao = "Pausar";
                this.setState(state);
            },100);           
       } else{
            clearInterval(this.timer);
            this.timer = null;
            state.botao = "Iniciar";
            this.setState(state);
       }            
    }

    limpar(){
        let state = this.state;
        if(state.numero === 0){
            alert("O cronômetro já está zerado!");
       } else{
            clearInterval(this.timer);
            this.timer = null;
            state.numero = 0;
            this.setState(state);
       }     

    }
    
    render(){
        return(
            <div className="container">
                <img src={require("./assets/cronometro.png")} alt="cronometro"/>
                <a className="timer">{this.state.numero.toFixed(1)}</a>
                <div className="areabotoes">
                    <a className="botao" onClick={this.iniciar}>{this.state.botao}</a>
                    <a className="botao" onClick={this.limpar}>Limpar</a>
                </div>
            </div>
        )
    }
}

export default App;