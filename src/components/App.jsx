import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Title1, Title2 } from './Styles';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (localStorage.getItem('contacts')) {
      setContacts(JSON.parse(localStorage.getItem('contacts')));
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      contacts && localStorage.setItem('contacts', JSON.stringify(contacts));
    });
  }, [contacts]);

  const createContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };
    console.log(newContact);

    setContacts(prevContact => [...prevContact, newContact]);
  };

  const handleChange = ({ target }) => {
    setFilter(target.value);
  };

  const deleteContact = id => {
    setContacts(prevContact =>
      prevContact.filter(contact => contact.id !== id)
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <Title1>Phonebook</Title1>
      <ContactForm contacts={contacts} createContact={createContact} />
      <Title2>Contacts</Title2>
      <Filter filter={filter} handleFilterChange={handleChange} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};
