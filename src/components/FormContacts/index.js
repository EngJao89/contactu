import React,{ useState, useEffect } from 'react';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { RiContactsFill } from 'react-icons/ri';
import api from '../../services/api';
import './formcontacts.css';

export default function FormContacts() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [sexo, setSexo] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      nome,
      telefone,
      email,
      sexo,
    };

    try {
      await api.post('/contacts/create', data);

      alert('Produto cadastrado com sucesso!');
    } catch (error) {
      alert('Erro ao cadastrar produto, tente novamente.');
    }
  }

  return (
    <div className="form-header">
      <RiContactsFill size={80} />
      <h1>Moog Agenda</h1>
      <div className="form-container">
        <section>
          <RiContactsBook2Fill size={30}/>
          <h3>Cadastro de Contatos</h3>
          <form>
            <input 
              className="form-campo"
              placeholder="Nome"
              value={nome}
              onChange={e => setNome(e.target.value)}
            />

            <input 
              className="form-campo"
              placeholder="Telefone"
              value={telefone}
              onChange={e => setTelefone(e.target.value)} 
            />

            <input 
              className="form-campo"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <input 
              className="form-campo"
              placeholder="Sexo"
              value={sexo}
              onChange={e => setSexo(e.target.value)}
            />

            <button 
              className="form-button"
              onClick={handleSubmit}
              >
              Cadastrar Contato
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}