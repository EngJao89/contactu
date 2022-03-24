import React,{ useState, useEffect } from 'react';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { RiContactsFill } from 'react-icons/ri';
import api from '../../services/api';
import './formcontacts.css';

export default function FormContacts() {
  const [codigo, setCodigo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [unidade, setUnidade] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      codigo,
      descricao,
      unidade,
      preco,
      categoria,
    };

    try {
      await api.post('/produtos/create', data);

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
        <RiContactsBook2Fill size={30}/>
        <h3>Cadastro de Contatos</h3>
        <form>
          <div className="form-camp">
            <label for="nome" className="col-sm-3 col-form-label">Nome:</label>
              <div className="col-sm-5 col-6">
                <input type="text" className="form-control" id="nome"
                  name="nome"
                  //value={state.nome}
                  //onChange={this.alterarDados} 
                />
              </div>
          </div>

          <div className="form-camp">
            <label for="telefone" className="form-camp-input">Telefone:</label>
              <div className="col-sm-5 col-6">
                <input type="text" className="form-control" id="telefone"
                  name="telefone"
                  //value={state.telefone}
                  //onChange={this.alterarDados} 
                />
              </div>
          </div>

          <div className="form-camp">
            <label for="email" className="form-camp-input">Email:</label>
              <div className="col-sm-5 col-6">
                <input type="text" className="form-control" id="email"
                  name="email"
                  //value={state.email}
                  //onChange={this.alterarDados} 
                />
              </div>
          </div>

          <div className="form-camp">
            <label for="sexo" className="form-camp-input">Sexo:</label>
              <div className="col-sm-6 col-6">
                <select className="form-control" 
                  id="sexo" 
                  name="sexo"
                  //value={state.sexo}
                  //onChange={this.alterarDados}                             
                >
                  <option>MASCULINO</option>
                  <option>FEMININO</option>
                </select>
              </div>
          </div>

          <div className="form-camp">
            <button
              className="adc-button"
              //onClick={this.incluirContato}
            >
              Adicionar
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}