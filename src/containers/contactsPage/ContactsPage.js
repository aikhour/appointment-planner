import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, handleUpdate }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [ name, setName ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ email, setEmail ] = useState(''); 
  const [ dupeName, setDupeName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if(name !== dupeName) {
      handleUpdate(name, phone, email);
    } else {
      alert('Please choose another name.')
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    const contactNames = contacts.map((obj) => {
      if(obj.name === name) {
        setDupName(true);
      }    
    });
    
  }, [name]);


  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
          name={name}
          setName={setName} 
          phone={phone} 
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}/> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts}/>
      </section>
    </div>
  );
};
