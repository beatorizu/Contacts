import React from 'react';

import './App.scss';
import Contacts from './components/Contacts'
import Filter from './components/Filters'
import Topbar from './components/Topbar'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      contacts: [],
      hasSearchFilter: false,
      searchFilter: [],
      sortBy: '',
      sortedContacts: [],
    };
  }

  componentDidMount() {
    fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts').then(response => {
      response.json().then(data => this.setState({ contacts: data }))
    })
  }

  render() {
    return (
      <div className="app" data-testid="app">
        <Topbar />

        <Filter />

        <Contacts data={this.state.contacts} />
      </div>
    )
  }
}

export default App;
