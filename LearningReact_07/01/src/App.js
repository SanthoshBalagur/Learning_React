import React, { Component } from 'react';
import Nav from './navigation';
import './navigation.css';
import Pros from './pros';
import State from './state';
import ComponentDidMount from './ComponentDidMount'
import Children from './children'
import Toggle from './component'
class app extends Component{
  state ={
    dis:true
  }

  click =()=>{
    this.setState({dis:!this.state.dis})
  }
  render(){

    return(
      <div>
        <Children IF = {this.state.dis}>
        <Nav/>
        <Pros new={10}/>
        <State/>
        <ComponentDidMount/>
        <Toggle/>
        </Children>
        <button onClick= {this.click}>Toggle </button>
        

        </div>
    )

    
  }
}
      


export default app;
