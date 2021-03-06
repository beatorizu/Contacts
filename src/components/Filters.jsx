import React from 'react';

class Filters extends React.Component {
	render() {
		return (
      <div className="container" data-testid="filters">
        <section className="filters">
          <div className="filters__search">
            <input type="text" className="filters__search__input" placeholder="Pesquisar" onChange={this.props.handleSearchChange} />

            <button className="filters__search__icon">
              <i className="fa fa-search" />
            </button>
          </div>

          <button className={`filters__item ${this.props.sortBy === 'name' ? 'is-selected' : ''}`} onClick={this.props.handleSortChange} name='name'>
            Nome <i className="fas fa-sort-down" />
          </button>

          <button className={`filters__item ${this.props.sortBy === 'country' ? 'is-selected' : ''}`} onClick={this.props.handleSortChange} name='country'>
            País <i className="fas fa-sort-down" />
          </button>

          <button className={`filters__item ${this.props.sortBy === 'company' ? 'is-selected' : ''}`} onClick={this.props.handleSortChange} name='company'>
            Empresa <i className="fas fa-sort-down" />
          </button>

          <button className={`filters__item ${this.props.sortBy === 'department' ? 'is-selected' : ''}`} onClick={this.props.handleSortChange} name='department'>
            Departamento <i className="fas fa-sort-down" />
          </button>

          <button className={`filters__item ${this.props.sortBy === 'admissionDate' ? 'is-selected' : ''}`} onClick={this.props.handleSortChange} name='admissionDate'>
            Data de admissão <i className="fas fa-sort-down" />
          </button>
        </section>
      </div>
    );
	}
}

export default Filters;
