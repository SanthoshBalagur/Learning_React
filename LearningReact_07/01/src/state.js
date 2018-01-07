import React, { Component } from 'react';
import $ from 'jquery';


class state extends Component{
  state = {
    name :"santh",
    age: 20
  }
santhosh =()=>{
  this.setState({name:"New changes"})
}
  render(){
    return(
      
  <div>
    <h1 onClick =  {this.santhosh}>New </h1>
    
<h1>State Learning {this.state.name}</h1>
  </div>
    )

    
  }
}
      


export default state;