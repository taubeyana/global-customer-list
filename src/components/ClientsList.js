import React, { Component, Fragment } from 'react';
import './ClientsList.css';
import List from '../common/List/List';
import { mapObjectByProp, sortByNum } from '../services';

class ClientsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clients: this.props.data,
            countries: [],
            cities: [],
            companies: [],
            selectedCountry: 'USA',
            selectedCity: 'Portland',
            selectedCustomer: null
        }
    }
    componentDidMount() {
        const sortedCountries = sortByNum(mapObjectByProp(this.state.clients,'Country', 'City'));
        const cities  = mapObjectByProp(this.state.clients,'City', 'CompanyName', 'Country', this.state.selectedCountry)
        const companiesByCity  = cities[this.state.selectedCity]
        this.setState({countries: [...sortedCountries]})
        this.setState({cities: [...sortByNum(cities)]})
        this.setState({companies: [...companiesByCity].sort()})
    }
    render() {
        return (
            <Fragment>
                <List data = { this.state.countries } />
                <List data = { this.state.cities } />
                <List data = { this.state.companies } />
            </Fragment>
        )
    }
}

export default ClientsList