import React from 'react';
import Menu from '../../components/Menu';
import FormContacts from '../../components/FormContacts';

export default function Contacts() {
  return (
    <div>
      <Menu />
      <h1>Contatos</h1>
      <FormContacts />
    </div>
  );
}