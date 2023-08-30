import { List, Item, DelButton, Text } from './Styles';

const ContactList = ({ contacts, deleteContact }) => {
  const handleDelete = id => {
    deleteContact(id);
  };

  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          <Text>
            {contact.name}: {contact.number + '  '}
          </Text>
          <DelButton type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </DelButton>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
