
import React, { Component } from 'react';
import './navigation.css';
class nav extends Component{
    render(){
        return(
        <div>
            <nav className = 'new'>
  <a href="/html/">HTML</a> 
  <a href="/css/">CSS</a> 
  <a href="/js/">JavaScript</a> 
  <a href="/jquery/">jQuery</a>
</nav>
            </div>
        )
    }
}

export default nav