import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {    persons: [ {name: 'Mooox' , age:28},
                        {name: 'lol' , age:28},
                        {name: 'Ma' , age:28} ],
                        otherstate: 'hfk'
          
                      }

  switchNameHandler = () => {
    this.setState({
      persons: [ {name: 'nisha' , age:28},
    {name: 'lojjjl' , age:28},
    {name: 'Ma' , age:28} ]
})
  }

  render() {
    //JSX code
    return (
      <div className="App">
       <h1>Hi i am Nisha</h1>
       <p>Cool para</p>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/><b>Hobbies:race</b> 
  
      <button onClick={this.switchNameHandler}>Switch Name</button>
      </div>
    );
   // return React.createElement('div',{className:'App'},React.createElement('h1',null,'new text'))
  }
}

export default App;
