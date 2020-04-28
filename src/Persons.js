import React from "react";
import Person from "./Person";

const Persons = ({ persons, deletePerson }) => {
  return (
    <div>
      <ul>
        {persons.map((person) => (
          <Person person={person} key={person.name} deletePerson={deletePerson} />
        ))}
      </ul>
    </div>
  );
};

export default Persons;
