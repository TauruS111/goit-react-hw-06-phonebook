import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'slice/contactsSlice';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: '', number: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ ...formData, id: nanoid() }));
    setFormData({ name: '', number: '' });
  };

  return (
    <form className={css.contact} onSubmit={handleSubmit}>
      <h3>Name</h3>
      <input
        className={css.inpute}
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Name"
      />
      <h3>Number</h3>
      <input
        className={css.inpute}
        type="tel"
        name="number"
        value={formData.number}
        onChange={handleChange}
        required
        placeholder="Phone number"
      />
      <button className={css.add} type="submit">
        Add contact
      </button>
    </form>
  );
};
