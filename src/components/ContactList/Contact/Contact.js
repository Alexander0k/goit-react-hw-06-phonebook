import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/ContactsSlice';
import css from './Contact.module.css';
import Button from '../../Button/Button';

function Contact({ name, number, idx, id }) {
  const dispatch = useDispatch();
  return (
    <li className={css.contact}>
      <p>
        {idx + 1} - {name}: {number}
      </p>
      <Button
        onClick={() => dispatch(deleteContact(id))}
        text="Delete"
        type="button"
        className={css.button}
      />
    </li>
  );
}

export default Contact;
