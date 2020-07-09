import React, { Component } from 'react';
import './App.css';
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Clear } from "./components/Clear";
import * as math from "mathjs";

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      input : ""
    };
  }

  // addInput = (val) => {
  //   this.setState = ({input: this.state.input + val});
  // };
  addInput = val => {
  this.setState({ input: this.state.input + val });
};

handleEquals = () => {
  this.setState({input : math.evaluate(this.state.input)})
};
  render() {
    return (
      <div className="app">
        <div className= "calc-wrapper">
          <Input input = {this.state.input}/>
          <div className="row">
              <Button handleClick={this.addInput}>1</Button>
              <Button handleClick={this.addInput}>2</Button>
              <Button handleClick={this.addInput}>3</Button>
              <Button handleClick={this.addInput}>+</Button>
          </div>
          <div className="row">
              <Button handleClick = {this.addInput}>4</Button>
              <Button handleClick = {this.addInput}>5</Button>
              <Button handleClick = {this.addInput}>6</Button>
              <Button handleClick = {this.addInput}>-</Button>
          </div>
          <div className="row">
              <Button handleClick = {this.addInput}>7</Button>
              <Button handleClick = {this.addInput}>8</Button>
              <Button handleClick = {this.addInput}>9</Button>
              <Button handleClick = {this.addInput}>*</Button>
          </div>
          <div className="row">
              <Button handleClick = {this.addInput}>.</Button>
              <Button handleClick = {this.addInput}>0</Button>
              <Button handleClick = {()=> this.handleEquals()}>=</Button>
              <Button handleClick = {this.addInput}>/</Button>
          </div>
          <div className="row">
              <Clear handleClear={() => {this.setState({input:""})}}>Clear</Clear>
              <Button handleClick = {this.addInput}>(</Button>
              <Button handleClick = {this.addInput}>)</Button>
              <Button handleClick = {this.addInput}>^</Button>

          </div>

        </div>
      </div>);
  }
}

export default App;
