import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Wrapper } from './Wrapper/Wrapper';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
    this.handleAddContact = this.handleAddContact.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAddContact(userContacts) {
    if (
      this.state.contacts.some(
        (contact) =>
          contact.name.toLowerCase() === userContacts.name.toLowerCase()
      )
    ) {
      alert(`${userContacts.name} is already in contacts`);
      return;
    }
    this.setState({
      contacts: [userContacts, ...this.state.contacts],
    });
  }

  handleFilterChange(e) {
    this.setState({
      filter: e.target.value,
    });
  }

  getContactFromFilter() {
    const { contacts, filter } = this.state;
    const filterContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return filterContacts;
  }

  handleDelete(contactId) {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(
          (contact) => contact.id !== contactId
        ),
      };
    });
  }

  render() {
    const { filter } = this.state;
    const contacts = this.getContactFromFilter();
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm handleAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
        <ContactsList
          contacts={contacts}
          handleDelete={this.handleDelete}
        />
      </Wrapper>
    );
  }
}
