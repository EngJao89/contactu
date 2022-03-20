import React from 'react';
import { FcContacts } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import './menu.css';

export default function Menu() {
  return (
    <nav className="navbar">
      <div className="menu">
        <div className="container">
          <FcContacts size={80} />
          <Link className="menu-link" to="/">
            Moog Agenda
          </Link>
          <Link className="menu-link" to="/schedule">
            Contatos
          </Link>
        </div>
      </div>
    </nav>
  );
}