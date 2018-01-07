import React, { Component } from 'react';
import $ from 'jquery';


class ComponentDidMount extends Component{
  state = {
    name :"santh",
    age: 20,
    data:[]
  }

componentDidMount(){
  $.get("https://jsonplaceholder.typicode.com/posts", (res) =>{
    this.setState({data:res})
  })
}
  render(){
    return(
      
  <div>
    {this.state.data.map((e)=>(
      <li>{e.title}</li>
    ))}
  </div>
    )

    
  }
}
      


export default ComponentDidMount;