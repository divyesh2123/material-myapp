import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class BuggyCounter  extends Component {
  
    constructor(props) {  
        super(props);  
        this.state = { counter: 0 };  
      //  this.handleClick = this.handleClick.bind(this);  
      } 
      
    
        
  render() {
    if (this.state.counter === 3) {  
        throw new Error('I crashed!');  
      }  
      return <h1 >{this.state.counter}</h1>;  
    }  
  }
