import React, { Component } from 'react';
import $ from 'jquery';


class ComponentDidMount extends Component{
  state = {
    name :"santh",
    age: 20,
    data:[]
  }


  
  componentDidMount(){
    $.get("https://jsonplaceholder.typicode.com/comments", (res) =>{
      this.setState({data:res})
    })
  }
    render(){
      return(
  
    <div>
      {this.state.data.map((e,i)=>
        {
        for( let x=10;x>=i;){ 
          return <li>{e.email}</li>;
        }
      }
      )}
    </div>
      )

    
  }
}
      


export default ComponentDidMount;