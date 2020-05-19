import React from 'react';

class Contact extends React.Component {
  render() {
    const { avatar, name, phone, country, admissionDate, company, department } = this.props.data;
    const date = !admissionDate ? "" : new Intl.DateTimeFormat('pt-BR').format(new Date(admissionDate))

    return (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar"><img src={avatar} alt="" /></span>
        <span className="contact__data">{name}</span>
        <span className="contact__data">{phone}</span>
        <span className="contact__data">{country}</span>
        <span className="contact__data">{date}</span>
        <span className="contact__data">{company}</span>
        <span className="contact__data">{department}</span>
      </article>
    );
  }
}

export default Contact;
