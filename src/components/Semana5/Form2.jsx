import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar";

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
      <>
        <Navbar/>
        <div className="card ms-5 me-5 mt-3 mb-3 border border-info-subtle">
          <div className="card-header border border-info-subtle bg-info-subtle">
            Semana 5
          </div>
          <div className="card-body">
            <h1 className="card-title">Check-in</h1>
            <h2>Let’s check you in</h2>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First name:</label>
              <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={firstName}
                  onChange={handleFirstNameChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last name:</label>
              <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={lastName}
                  onChange={handleLastNameChange}
              />
            </div>
            <p>Your ticket will be issued to: <b> {fullName}</b></p>
        </div>
      </div>
      </>
  );
}
