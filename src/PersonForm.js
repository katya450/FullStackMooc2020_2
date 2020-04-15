import React from "react";

const PersonForm = ({ newName, newNumber, addPerson, handleNewNameChange, handleNewNumberChange}) => {

  return (
    <div>
      <h2>Add new person</h2>
      <form onSubmit={addPerson}>
        <div>
          <label>
            Name:
            <input value={newName} onChange={handleNewNameChange} />
          </label>
        </div>
        <div>
          <label>
            Number:
            <input value={newNumber} onChange={handleNewNumberChange} />
          </label>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
