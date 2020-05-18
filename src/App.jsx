import React from 'react';

import { ReactComponent as LogoSvg } from "./assets/img/logo.svg";

import './App.scss';
import Contacts from './components/Contacts'
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

        <Contacts />
      </React.Fragment>
    )
  }
}

export default App;
