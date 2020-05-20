import React from 'react';

class Contact extends React.Component {
  render() {
    const { avatar, name, phone, country, admissionDate, company, department } = this.props.data;
    const date = !admissionDate ? "" : new Intl.DateTimeFormat('pt-BR').format(new Date(admissionDate))

    return (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar"><img src={avatar} alt="" /></span>
        <span className="contact__data" data-testid="contact-name">{name}</span>
        <span className="contact__data" data-testid="contact-phone">{phone}</span>
        <span className="contact__data" data-testid="contact-country">{country}</span>
        <span className="contact__data" data-testid="contact-date">{date}</span>
        <span className="contact__data" data-testid="contact-company">{company}</span>
        <span className="contact__data">{department}</span>
      </article>
    );
  }
}

export default Contact;
