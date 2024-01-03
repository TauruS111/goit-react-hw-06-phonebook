import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'slice/contactsSlice';
import { selectAddContact } from 'slice/selector';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAddContact);

  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.item}>
      {contacts &&
        contacts.map(contact => (
          <li className={css.list} key={contact.id}>
            <div className={css.block}>
              {contact.name} : {contact.number}
            </div>
            <button className={css.delete} onClick={() => onDelete(contact.id)}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};
