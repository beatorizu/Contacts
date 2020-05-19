import React from 'react';

import './App.scss';
import Contacts from './components/Contacts'
import Filter from './components/Filters'
import Topbar from './components/Topbar'

class App extends React.Component {
  render() {
    return (
      <div className="app" data-testid="app">
        <Topbar />

        <Filter />

        <Contacts />
      </div>
    )
  }
}

export default App;
