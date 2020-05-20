import React from "react";

import Contact from "./Contact"

class Contacts extends React.Component {
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
      <div className="container" data-testid="contacts">
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
          {this.state.contacts.map(contact => <Contact data={contact} key={contact.id} />)}
        </section>
      </div>

		);
	}
}

export default Contacts;
