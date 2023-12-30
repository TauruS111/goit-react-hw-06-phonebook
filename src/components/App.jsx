import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, updateFilter } from '../slice/contactsSlice';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = newFilter => {
    dispatch(updateFilter(newFilter));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <div className="contact">
        <ContactForm />
      </div>
      <h2>Contacts</h2>
      <h4>Find contacts by name</h4>
      <Filter filter={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
};

export default App;
