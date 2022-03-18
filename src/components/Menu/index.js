import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

export default function Menu() {
  return (
    <nav className="navbar">
      <div className="menu">
        <div className="container">
          <Link className="menu-link" to="/">
            Moog Agenda
          </Link>
          <Link className="menu-link" to="/listcontacts">
            Contatos
          </Link>
        </div>
      </div>
    </nav>
  );
}