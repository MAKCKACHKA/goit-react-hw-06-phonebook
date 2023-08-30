import { nanoid } from 'nanoid';
import { Title1, Title2 } from './Styles';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  updateFilter,
  delContact,
} from 'redux/contacts/contactsSlice';

export const App = () => {
  const { contacts, filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const createContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };
    console.log(newContact);
    dispatch(addContact(newContact));
  };

  const handleChange = ({ target }) => {
    dispatch(updateFilter(target.value));
  };

  const deleteContact = id => {
    dispatch(delContact(contacts.filter(contact => contact.id !== id)));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {console.log(contacts, filter)}
      <Title1>Phonebook</Title1>
      <ContactForm contacts={contacts} createContact={createContact} />
      <Title2>Contacts</Title2>
      <Filter filter={filter} handleFilterChange={handleChange} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};
