import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';

import s from './Contact.module.css';
import Button from '../Button/Button';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      <span className={s.item}>{name}:</span>
      <span className={s.item}>{number}</span>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};

export default Contact;
