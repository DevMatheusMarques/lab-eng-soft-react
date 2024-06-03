import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Chat from './Chat';
import ContactList from './ContactList';
import Navbar from "../Navbar";

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  return (
      <>
        <Navbar/>
        <div className="card ms-5 me-5 mt-3 mb-3 border border-info-subtle">
          <div className="card-header border border-info-subtle bg-info-subtle">
            Semana 5
          </div>
          <div className="card-body">
            <h1 className="card-title mb-5">Messenger</h1>
            <div className="row">
              <div className="col-md-4">
                <ContactList
                    contacts={contacts}
                    selectedContact={to}
                    onSelect={contact => setTo(contact)}
                />
              </div>
              <div className="col-md-8">
                <Chat key={to.email} contact={to}/>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

const contacts = [
  {name: 'Taylor', email: 'taylor@mail.com'},
  {name: 'Alice', email: 'alice@mail.com'},
  {name: 'Bob', email: 'bob@mail.com'}
];
