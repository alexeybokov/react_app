import React, { Component } from 'react';
import './App.css';
import  Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p> Another code here </p>
          <Person name="Alex" age="29" >My Hobbies is </Person>
          <Person name="Jon" age="35"  >My Hobbies: Music</Person>
          <Person name="July" age="18" ></Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m React App !!!' ))
  }
}

export default App;
