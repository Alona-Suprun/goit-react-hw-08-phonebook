import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import { getContactsList } from '../../redux/contacts/contacts-selectors';
import Contact from './Contact';
import s from './Contact.module.css';

const ContactList = ({ name, number }) => {
  const contacts = useSelector(getContactsList);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(contactsActions.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
