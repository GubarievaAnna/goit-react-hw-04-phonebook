import { Component } from 'react';
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

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const dataSaved = !localStorage.getItem('contacts')
      ? dataInitial
      : JSON.parse(localStorage.getItem('contacts'));
    this.setState({ contacts: dataSaved });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onFilterSearch = e => {
    this.setState({ filter: e.target.value });
  };

  onAddContact = (name, number) => {
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

  onFilterContacts = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  onDeleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    return (
      <div className={s.container}>
        <h1 className={s.titlePhonebook}>Phonebook</h1>
        <ContactForm onAddContact={this.onAddContact} />
        <h2 className={s.titleContacts}>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onFilterSearch={this.onFilterSearch}
        />
        <ContactList
          contacts={this.onFilterContacts()}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}

export default App;
