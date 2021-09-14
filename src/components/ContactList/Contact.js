import React from 'react';
import PropTypes from 'prop-types';
import s from './Contact.module.css';
import Button from '../Button/Button';
const Contact = ({ name, number, onDeleteContact }) => {
  return (
    <li className={s.item}>
      <span className={s.item}>{name}:</span>
      <span className={s.item}>{number}</span>
      <Button type="button" onClick={onDeleteContact}>
        Delete
      </Button>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
