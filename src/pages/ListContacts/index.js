import React, { Component } from "react";
import Menu from "../../components/Menu";
import { ContactsService } from "../../services/ContactsService";
import './listcontacts.css';

export default class ItemContato extends Component {

  static defaultProps = {
    contato: {},
  }

  constructor(props){
    super(props);
  }

  async componentDidMount(){
    const contatos = await ContactsService.listar();
    this.setState({
        contatos
    });
}

  render(){

    const {props} = this, { contato } = props;

    return(
      <div className="card-item">
        <Menu />
        <div>
          <button 
            type="button" 
            className="botao btn btn-danger btn-sm" 
            onClick={this.removerContato}>
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
        <div>
          <span><strong>Nome: </strong> {contato.nome}</span>
        </div>
        <div>
          <span><strong>Telefone: </strong> {contato.telefone}</span>
        </div>
        <div>
          <span><strong>Email: </strong> {contato.email}</span>
        </div>
        <div>
          <span><strong>Sexo: </strong> {contato.sexo}</span>
        </div>
      </div>
    )
  }
}