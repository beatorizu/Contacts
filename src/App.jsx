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
      order: 1
    };
  }

  compare = order => (firstContact, secondContact, key) => {
    if (firstContact[key] < secondContact[key]) {
      return -1 * order
    } else if (firstContact[key] > secondContact[key]) {
      return 1 * order
    }
    return 0
  }

  handleSearchChange = e => {
    const sortedContacts = this.state.contacts.filter(contact => new RegExp(e.target.value, 'i').test(contact.name));
    this.setState({ sortedContacts })
  }

  handleSortChange = e => {
    const [sort, order] = e.target.name === this.state.sortBy ? [this.compare(-this.state.order), -this.state.order] : [this.compare(1), 1]
    const sortedContacts = [...this.state.sortedContacts].sort((firstContact, secondContact) => sort(firstContact, secondContact, e.target.name));
    this.setState({ order, sortedContacts, sortBy: e.target.name });
  }

  componentDidMount() {
    fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts').then(response => {
      response.json().then(data => this.setState({ contacts: data, sortedContacts: data }))
    })
  }

  render() {
    return (
      <div className="app" data-testid="app">
        <Topbar />

        <Filter handleSearchChange={this.handleSearchChange} handleSortChange={this.handleSortChange} sortBy={this.state.sortBy} />

        <Contacts data={this.state.sortedContacts} />
      </div>
    )
  }
}

export default App;
