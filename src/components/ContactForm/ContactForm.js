import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as contactsOperations from '../../redux/contacts/contacts-operations';
import * as contactsSelectors from '../../redux/contacts/contacts-selectors';

import s from './ContactForm.module.css';
import Button from '../Button/Button';

const ContactForm = () => {
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();
  const history = useHistory();
  const goToContacts = useRef(false);

  useEffect(() => {
    if (!goToContacts.current) {
      goToContacts.current = true;
      return;
    }
    history.push('/contacts');
  }, [history, contacts]);

  //const inputChange = e => {
  // const { name, value } = e.target;
  //  switch (name) {
  //   case 'name':
  //    setName(value);
  //     break;

  //  case 'number':
  //     setNumber(value);
  //     break;

  // default:
  //    return;
  //  }
  // };

  const formSubmit = async e => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;
    const existingName = contacts.find(
      prevContact => prevContact.name === name,
    );
    if (existingName) {
      alert(`${existingName.name} is already in contact list`);
      resetForm();
      return;
    }

    const newContact = {
      name,
      number,
    };

    dispatch(contactsOperations.setContact(newContact));
    resetForm();
  };

  const resetForm = e => {
    e.target.name.value = '';
    e.target.number.value = '';
  };

  return (
    <form className={s.form} onSubmit={formSubmit}>
      <label className={s.label}>
        Name
        <input
          placeholder="type name"
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          //value={name}
          // onChange={inputChange}
        />
      </label>

      <label className={s.label}>
        Number
        <input
          placeholder="type number"
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          //  value={number}
          // onChange={inputChange}
        />
      </label>

      <Button type="submit">Add contact</Button>
    </form>
  );
};

export default ContactForm;
