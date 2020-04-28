import React from "react";
import Person from "./Person";

const Persons = ({ persons, filter }) => {
  return (
    <div>
      <ul>
        {persons.map((person) => (
          <Person person={person} key={person.name} />
        ))}
      </ul>
    </div>
  );
};

export default Persons;
