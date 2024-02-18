import React, { Component } from 'react';
import FormInput from './FormInput/FormInput';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
    searchValue: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number, contacts } = this.state;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const isNameInclud = contacts.some(contact => contact.name === name);

    isNameInclud
      ? alert(`${name} already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
          name: '',
          number: '',
        }));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(man => man.id !== id),
    }));
  };

  handleFilterContact = value => {
    this.setState({ searchValue: value });
  };

  getFilteredData = () => {
    const { searchValue, contacts } = this.state;
    return contacts.filter(man =>
      man.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  };

  render() {
    const { contacts, name, number, searchValue } = this.state;
    const filteredContacts = this.getFilteredData();
    return (
      <>
        <div
          style={{
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
          }}
        >
          <h1>Phonebook</h1>
          <FormInput
            // id={nanoid()}
            name={name}
            number={number}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />

          <h2>Contacts</h2>
          <Filter
            searchValue={searchValue}
            handleFilterContact={this.handleFilterContact}
          />
          <ContactList
            people={filteredContacts}
            onDeleteContact={this.handleDeleteContact}
          />
        </div>
      </>
    );
  }
}

export default App;
