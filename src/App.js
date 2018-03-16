import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';
class App extends Component {
  render() {
    //JSX code
    return (
      <div className="App">
       <h1>Hi i am Nisha</h1>
       <p>Cool para</p>
       <Person name="Max" age="28"/>
       <Person name="Nisha" age="33"/>
       <Person name="ayu" age="33"/>Hobbies:race 
       <Person name="zz" age="33"/>
      </div>
    );
   // return React.createElement('div',{className:'App'},React.createElement('h1',null,'new text'))
  }
}

export default App;
