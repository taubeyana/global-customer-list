import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './ClientsList.css';
import List from '../common/List/List';
import { setCountry, setCity, getCounries, getCities, getCompanies, setCompany } from '../store/actions'

class ClientsList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        this.props.dispatch(getCounries())
        this.props.dispatch(getCities())
        this.props.dispatch(getCompanies())
    }
    handleListItemClick = (e) => {
        this.props.dispatch(setCountry(e.target.textContent.trim()))
        this.props.dispatch(getCities())
        this.props.dispatch(getCompanies())
    }
    handleOnCityClick = (e) => {
        this.props.dispatch(setCity(e.target.textContent.trim()))
        this.props.dispatch(getCompanies())
    }
    handleOnCompanyClick = (e) => {
        this.props.dispatch(setCompany(e.target.textContent.trim()))
        // this.props.dispatch(getCompanies())
    }
    
    render() {
        return (
            <Fragment>
                <List onClick = { this.handleListItemClick } data = { this.props.countries } />
                <List onClick = { this.handleOnCityClick } data = { this.props.sortedCities } />
                <List onClick = { this.handleOnCompanyClick } data = { this.props.companies } />
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    countries: state.countries,
    sortedCities: state.sortedCities,
    companies: state.companies
})
export default connect(mapStateToProps)(ClientsList)