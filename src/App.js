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

  switchNameHandler = (newName) => {
      // console.log('Was clicked!');
      // this.state.persons[0].name = 'Alexey';
      this.setState( {
          persons: [
              {name: newName, age: 28},
              {name: 'Bobby', age: 25},
              {name: 'Johnny', age: 30}
          ]
      } )
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

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p> This is really working! </p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {
            this.state.showPersons === true ?
              <div>
                <Person
                  name={this.state.persons[0].name}
                  age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name}
                  age={this.state.persons[1].age}
                  click={this.switchNameHandler.bind(this, 'Alex')}
                  changed={this.nameChangedHandler}>My Hobbies: Music</Person>
                <Person
                  name={this.state.persons[2].name}
                  age={this.state.persons[2].age}/>
                </div> : null
          }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m React App !!!' ))
  }
}

export default App;

