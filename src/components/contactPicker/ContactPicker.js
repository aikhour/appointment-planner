import React from "react";

export const ContactPicker = ({ contacts, handleChange, value, name }) => {
  return (
    <>
      <select value={value} name={name} onChange={handleChange}>
        <option value={""} key={-1}>
          No Contact Selected
        </option>
        {contacts.map((contact) => {
          return (
          <option value={contact} key={contact}>
            {contact}
          </option>)
        })}
      </select>
    </>
  );
};
