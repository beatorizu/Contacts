import React from 'react';

import { ReactComponent as LogoSvg } from "./assets/img/logo.svg";

import './App.scss';
import Filter from './components/Filters'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="topbar">
          <div className="container">
            <a href="/" className="topbar__logo">
              <LogoSvg alt="Logo Instagram" />
            </a>
          </div>
        </header>

        <Filter />

        <div className="container">
          <section className="contacts">
            <article className="contact">
              <span className="contact__avatar" />
              <span className="contact__data">Nome</span>
              <span className="contact__data">Telefone</span>
              <span className="contact__data">País</span>
              <span className="contact__data">Admissão</span>
              <span className="contact__data">Empresa</span>
              <span className="contact__data">Departamento</span>
            </article>
          </section>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
