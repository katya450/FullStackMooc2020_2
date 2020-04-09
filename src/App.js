import React, { useState } from 'react'

const Person = ({person}) => {
return <li>{person.name} {person.number}</li>;
}

const App = () => {

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    }
    const personsNames = persons.map(person => person.name)
    if (personsNames.includes(newPerson.name)){
      alert(`${newPerson.name} is already in phonebook you blind dumbass`);
    } else {
      setPersons(persons.concat(newPerson));
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNewNameChange = (event) => {
    console.log("name: ", event.target.value);
    setNewName(event.target.value)
  }

  const handleNewNumberChange = (event) => {
    console.log("number: ", event.target.value);
    setNewNumber(event.target.value)
  }

  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: 1234 }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          <label>Name:
            <input value={newName} onChange={handleNewNameChange}/>
          </label>
          </div>
          <div>
          <label>Number:
            <input value={newNumber} onChange={handleNewNumberChange}/>
          </label>
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
