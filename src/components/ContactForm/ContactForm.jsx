import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { onAddContact } = this.props;
    const { name, number } = this.state;
    return (
      <form
        className={s.form}
        onSubmit={e => {
          e.preventDefault();
          this.reset();
          onAddContact(name, number);
        }}
      >
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            className={s.input}
            value={name}
            onChange={this.onInputChange}
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
            onChange={this.onInputChange}
            required
          />
        </label>
        <button type="submit" className={s.button}>
          Add a contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
