import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map(el => (
        <li key={el.id} className={s.item}>
          <p className={s.paragraph}>
            <span className={s.name}>{el.name}</span>: {el.number}
          </p>
          <button className={s.button} onClick={() => onDeleteContact(el.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
