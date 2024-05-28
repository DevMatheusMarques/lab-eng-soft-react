import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar";

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleFirstNameChange(e) {
    setPerson(prevPerson => ({
      ...prevPerson,
      firstName: e.target.value
    }));
  }

  function handleLastNameChange(e) {
    setPerson(prevPerson => ({
      ...prevPerson,
      lastName: e.target.value
    }));
  }

  function handleEmailChange(e) {
    setPerson(prevPerson => ({
      ...prevPerson,
      email: e.target.value
    }));
  }

  return (
    <>
      <Navbar/>
      <div className="container">
        <label>
          Nome:
          <input
            value={person.firstName}
            onChange={handleFirstNameChange}
          />
        </label>
        <label>
          Sobrenome:
          <input
            value={person.lastName}
            onChange={handleLastNameChange}
          />
        </label>
        <label>
          E-mail:
          <input
            value={person.email}
            onChange={handleEmailChange}
          />
        </label>
        <p>
          {person.firstName}{' '}
          {person.lastName}{' '}
          ({person.email})
        </p>
      </div>
    </>
  );
}
