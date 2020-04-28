import React, { useState, useEffect } from "react";
import PersonForm from "./PersonForm";
import FilterPersons from "./FilterPersons";
import Persons from "./Persons";
import personService from "./services/persons";
import './index.css'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }
  return (
    <div className="error">
      {message}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(null)

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };
    const personsNames = persons.map((person) => person.name);
    if (personsNames.includes(newPerson.name)) {
      alert(`${newPerson.name} is already in phonebook you blind dumbass`);
    } else {
      personService.create(newPerson)
      .then((response) => {
        setErrorMessage(`Added ${newName}`)
        setTimeout(() => setErrorMessage(null), 1000)
        setPersons(persons.concat(response.data));
      });
    }
    setNewName("");
    setNewNumber("");
  };

  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  const handleFilter = (event) => {
    setFilterValue(event.target.value);
  };

  const filteredPersons = () => {
    return persons.filter((person) =>
      person.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  const deletePerson = (person) => {
    if (window.confirm(`Really wanna delete ${person.name} ?`)) {
      personService
        .remove(person.id)
        .then(personService.getAll)
        .then((response) => {
          setErrorMessage(`Removed ${person.name}`)
          setTimeout(() => setErrorMessage(null), 1000)
          setPersons(response.data);
        });
    }
  };

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <FilterPersons handleFilter={handleFilter} />
      <h2>Add new person</h2>
      <PersonForm
        addPerson={addPerson}
        handleNewNameChange={handleNewNameChange}
        handleNewNumberChange={handleNewNumberChange}
        newNumber={newNumber}
        newName={newName}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons(persons)} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
