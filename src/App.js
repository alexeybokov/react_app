import React, { Component } from 'react';
import './App.css';
import  Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Alex', age: 38 },
      { name: 'Bob', age: 18 },
      { name: 'John', age: 25 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        {name: 'Alex', age: 28},
        {name: event.target.value, age: 25},
        {name: 'John', age: 30}
      ]
    } )
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p> This is really working! </p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m React App !!!' ))
  }
}

export default App;

