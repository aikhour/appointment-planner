import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input 
            type='text'
            name="name"
            value={name} 
            onChange={(e) => setName(e.target.value)}
            required/>
          <br/>
          <label>Contact Phone</label>
          <input 
            type='text'
            name="phone"
            value={phone} 
            onChange={(e) => setPhone(e.target.value)}
            required
            pattern='(04)([0-9.]{8})'/>
          <br/>
          <label>Email</label>
          <input 
            type='text'
            name="email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required/>
          <br/>
          <input
            type='submit'
            value="Submit" />
        </form>
    </>
  );
};

