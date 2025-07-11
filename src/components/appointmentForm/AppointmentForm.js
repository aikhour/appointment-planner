import React, {useMemo} from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>Appointment Name</label>
        <input 
            type='text'
            name="name"
            value={name} 
            onChange={(e) => setName(e.target.value)}
            required/>
          <br/>
        <label>Client</label>
        <ContactPicker 
          contacts={contactNames} 
          value={contact} 
          name="contact"
          handleChange={(e) => setContact(e.target.value)} />
        <br/>
        <label>Appointment Date</label>
        <input 
            type='date'
            name="date"
            min={getTodayString()}
            value={date} 
            onChange={(e) => setDate(e.target.value)}
            required/>
          <br/>
        <label>Appointment Time</label>
        <input 
            type='time'
            name="time"
            value={time} 
            onChange={(e) => setTime(e.target.value)}
            required/>
          <br/>
        <input
            type='submit'
            value="Add Appointment" />
    </form>
    </>
  );
};
