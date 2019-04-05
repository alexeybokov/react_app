import React, { useState } from 'react';
import './App.css';
import  Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState] = useState({
    persons: [
      { name: 'Alex', age: 38 },
      { name: 'Bob', age: 18 },
      { name: 'John', age: 25 }
    ]
  });

  const switchNameHandler = () => {
      // console.log('Was clicked!');
      // this.state.persons[0].name = 'Alexey';
      setPersonsState({
          persons: [
              { name: 'Alexey', age: 28 },
              { name: 'Bobby', age: 25 },
              { name: 'Johnny', age: 30 }
          ]
      });
  };

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p> This is really working! </p>
          <button onClick={switchNameHandler}>Switch Name</button>
          <Person name={personsState.persons[0].name}
                  age={personsState.persons[0].age}>
              My Hobbies is ...
          </Person>
          <Person name={personsState.persons[1].name}
                  age={personsState.persons[1].age} >
              My Hobbies: Music
          </Person>
          <Person name={personsState.persons[2].name}
                  age={personsState.persons[2].age} >
              My Hobbies is driving
          </Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m React App !!!' ))
  };

export default app;

