import { useEffect } from 'react';
import { fetchAllContacts } from '../../redux/contacts/contacts-operations';
import * as contactsSelectors from '../../redux/contacts/contacts-selectors';
import { useSelector, useDispatch } from 'react-redux';

import Contact from './Contact';
import s from './Contact.module.css';

const ContactList = ({ name, number }) => {
  const contacts = useSelector(contactsSelectors.getContactsList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
