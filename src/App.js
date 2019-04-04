import React, { Component } from 'react';
import './App.css';
import  Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Alex', age: 38 },
      { name: 'Bob', age: 18 },
      { name: 'John', age: 25 }
    ]
  }

  switchNameHandler = () => {
    // console.log('Was clicked!');
    // this.state.persons[0].name = 'Alexey';
    this.setState({persons: [
      { name: 'Alexey', age: 28 },
      { name: 'Bobby', age: 25 },
      { name: 'Johnny', age: 30 }
      ]
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p> This is really working! </p>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies is ...</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Music</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} >My Hobbies is driving</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m React App !!!' ))
  }
}

export default App;
