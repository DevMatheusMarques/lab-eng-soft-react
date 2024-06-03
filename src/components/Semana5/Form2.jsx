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
        <div className="container mt-4">
          <div className="card">
            <div className="card-header border border-info-subtle bg-info-subtle">
              <h1 style={{ margin: '0' }}>Check-in</h1>
            </div>
            <div className="card-body">
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
        </div>
      </>
  );
}
