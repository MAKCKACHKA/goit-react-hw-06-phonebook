import { List, Item, DelButton } from './Styles';

const ContactList = ({ contacts, deleteContact }) => {
  const handleDelete = id => {
    deleteContact(id);
  };

  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.number + '  '}
          <DelButton type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </DelButton>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
