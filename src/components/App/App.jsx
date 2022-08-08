import { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm.jsx';
import Filter from '../Filter/Filter.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import s from './App.module.css';

const dataInitial = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return !localStorage.getItem('contacts')
      ? dataInitial
      : JSON.parse(localStorage.getItem('contacts'));
  });
  const [filter, setFilter] = useState('');

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts.length !== prevState.contacts.length) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  const onFilterSearch = e => {
    setFilter(e.target.value);
  };

  const addContact = (name, number) => {
    const repeatOfNames = this.state.contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (repeatOfNames) {
      alert(`${name} is already is in contacts.`);
      return;
    }
    this.setState(prev => ({
      contacts: [...prev.contacts, { id: nanoid(), name, number }],
    }));
  };

  const filterContacts = () => {
    const filteredContacts = contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(el => el.id !== id));
  };

  const contactsFiltered = filterContacts();

  return (
    <div className={s.container}>
      <h1 className={s.titlePhonebook}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2 className={s.titleContacts}>Contacts</h2>
      <Filter filter={filter} onFilterSearch={onFilterSearch} />
      <ContactList contacts={contactsFiltered} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
