import React, { Component } from 'react';
import $ from 'jquery';

class children extends  Component{
  render(){
    return(
      <div>
         {this.props.IF ? this.props.children:null}
      </div>
    )
  }
}
 export default children;

