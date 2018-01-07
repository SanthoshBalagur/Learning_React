import React, { Component } from 'react';
import Nav from './navigation';
import './navigation.css';
import Pros from './pros';
import State from './state';
import ComponentDidMount from './ComponentDidMount'

class app extends Component{
  render(){
    return(
      <div>
        <Nav/>
        <Pros new={10}/>
        <State/>
        <ComponentDidMount/>

        </div>
    )

    
  }
}
      


export default app;
