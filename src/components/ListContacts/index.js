import React,{ useState, useEffect } from 'react';
import { FiTrash, FiEdit } from 'react-icons/fi';
import { RiContactsFill } from 'react-icons/ri';
import { IoMdContact } from 'react-icons/io';
import api from '../../services/api';
import './listcontacts.css';

export default function ListContacts() {
  const [contacts, setContacts] = useState([]);
  const [data, setData] = useState([]);

  const [modal, setShowModal] = useState(false);

  useEffect(() => {
    async function getContacts() {
      const response = await api.get('/contacts/listen');;
      setContacts(response.data);
    }
    getContacts();
  }, []);

  async function handleOpenContacts() {
    const response = await api.get(`/contacts/listen`);

    setData(response);
    setShowModal(true);
  }

  async function handleDeleteContacts(_id) {
    try {
      await api.delete(`/contacts/contacts${_id}/delete`);

      setContacts(contacts.filter(contacts => contacts._id !== _id));
    } catch (error) {
      alert('Erro ao deletar produto, tente novamente.');
    }
  }
  return (
    <div>
      <div className="list-container">
        <RiContactsFill size={80}/>
        <h2>Lista de Contatos</h2>
        {contacts.map(contacts => (
          <div key={contacts._id} className="card-item" onClick={ () => handleOpenContacts(contacts)}>
            <IoMdContact size={20}/>
              <h5><strong>Nome: </strong>{contacts.nome}</h5>
              <h5><strong>Telefone: </strong>{contacts.telefone}</h5>
              <h5><strong>Email: </strong>{contacts.email}</h5>
              <h5><strong>Sexo: </strong>{contacts.sexo}</h5>
            <button className="change-button">
              <FiEdit size={20} />
            </button>
            <button className="exc-button" onClick={ () => handleDeleteContacts(contacts._id)}> 
              <FiTrash size={20} color="#FF3434" />
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}