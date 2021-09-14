import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contact/add', data => ({
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
}));

const deleteContact = createAction('contact/delete');

const filterContacts = createAction('contact/filterContacts');

const contactsActions = { addContact, deleteContact, filterContacts };
export default contactsActions;
