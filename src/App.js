import React, { useState, useEffect } from "react";
import PersonForm from "./PersonForm";
import FilterPersons from "./FilterPersons";
import Persons from "./Persons";
import personService from "./services/persons";
import "./index.css";

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }
  return <div className="notification">{message}</div>;
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [notification, setNotification] = useState(null);

  const updatePerson = (id, newPerson) => {
    personService
      .update(id, newPerson)
      .then(
        personService.getAll().then((response) => setPersons(response.data))
      )
      .then(() => {
          setNotification(`Updated ${newPerson.name}`);
          setTimeout(() => setNotification(null), 1000);
        })
      .catch(error => {
        setNotification(`Cannot update removed person: ${newPerson.name}`);
        setTimeout(() => setNotification(null), 1000);
      })
  };

  const addPerson = (newPerson) => {
    personService.create(newPerson).then((response) => {
      setNotification(`Added ${newName}`);
      setTimeout(() => setNotification(null), 1000);
      setPersons(persons.concat(response.data));
    });
  };

  const tryToAddPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };

    const checkNameGetId = (person) => {
      const idToCheck = person.id;
      if (person.name === newPerson.name) {
        return idToCheck;
      } else {
        return null;
      }
    };

    const maybeId = persons.reduce((acc, person) => (acc === null ? checkNameGetId(person) : acc), null);

    if (maybeId === null) {
      addPerson(newPerson);
    } else {
      updatePerson(maybeId, newPerson);
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
          setNotification(`Removed ${person.name}`);
          setTimeout(() => setNotification(null), 1000);
          setPersons(response.data);
        });
    }
  };

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
      <FilterPersons handleFilter={handleFilter} />
      <h2>Add new person</h2>
      <PersonForm
        addPerson={tryToAddPerson}
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
