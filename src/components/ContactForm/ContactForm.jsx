import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const onFormSubmit = e => {
    e.preventDefault();
    addContact(name, number);
    reset();
  };

  return (
    <form className={s.form} onSubmit={onFormSubmit}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          className={s.input}
          value={name}
          onChange={onInputChange}
          required
        />
      </label>
      <label className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          className={s.input}
          value={number}
          onChange={onInputChange}
          required
        />
      </label>
      <button type="submit" className={s.button}>
        Add a contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
