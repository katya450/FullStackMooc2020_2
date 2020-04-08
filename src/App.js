import React, { useState } from 'react'

const Person = ({person}) => {
  return <li>{person.name}</li>;
}

const App = () => {

  const addName = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName
    }
    setPersons(persons.concat(newPerson));
    setNewName('');
  }

  const handleNewNameChange = (event) => {
    console.log("name: ", event.target.value);
    setNewName(event.target.value)
  }

  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])

  const [ newName, setNewName ] = useState('')

  console.log(persons);

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNewNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>{persons.map((person) => <Person person={person} key={person.name} />)}</ul>
      </div>
    </div>
  )

}

export default App
