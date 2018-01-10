import React, { Component } from 'react';
import $ from 'jquery';
import Children from './children'


class toggle  extends Component{
  
   state = {
     x:0
   }
   
  click =()=>{
    this.setState({x:this.state.x+1})
  }

  render(){
    return(
      
  <div>
  <li>{this.state.x}</li>
     <button onClick= {this.click}>Toggle </button>
     
  </div>
    )

    
  }
}
      


export default toggle;