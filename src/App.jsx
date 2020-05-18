import React from 'react';

import './App.scss';
import Contacts from './components/Contacts'
import Filter from './components/Filters'
import Topbar from './components/Topbar'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Topbar />

        <Filter />

        <Contacts />
      </React.Fragment>
    )
  }
}

export default App;
