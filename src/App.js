import React, { useState, useEffect } from "react";
import PersonForm from "./PersonForm";
import FilterPersons from "./FilterPersons";
import Persons from "./Persons";
import axios from "axios";
//import db from "//db.json";

const App = () => {

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
      setPersons(persons.concat(newPerson));
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

  const handleFilter = (event) => {
    console.log("filter: ", event.target.value);
    return null;
  };

  const [persons, setPersons] = useState([]);

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  return (
    <div>
      <h2>Phonebook</h2>
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
      <Persons persons={persons}/>
    </div>
  );
};

export default App;
