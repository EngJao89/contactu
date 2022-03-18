import React from 'react';
import './formcontacts.css';

export default function FormContacts() {
  return (
    <div className="form-container">
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

      </form>
    </div>
  );
}