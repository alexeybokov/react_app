import React, { Component } from 'react';
import './App.css';
import  Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p> Another code here </p>
        <Person />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m React App !!!' ))
  }
}

export default App;
