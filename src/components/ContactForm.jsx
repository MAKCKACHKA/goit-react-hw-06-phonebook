// import { Component } from 'react';
import { useState } from 'react';
import { Form, Button, Group, Label, Input } from './Styles';

const ContactForm = ({ contacts, createContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    } else if (target.name === 'number') {
      setNumber(target.value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts!`);
    } else {
      createContact({
        name,
        number,
      });
      setName('');
      setNumber('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Group>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
        <Label>Name</Label>
      </Group>
      <Group>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
        <Label>Number </Label>
      </Group>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
