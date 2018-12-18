import React, { Component } from 'react';
import './List.css';
import uniqid from 'uniqid';
import { connect } from 'react-redux'
import { 
    setCountry,
    setCity, 
    getCounries, 
    getCities, 
    getCompanies, 
    setCompany, 
    getCompanyLocation,
    setCompanyAddress
} from '../../store/actions';

class List2 extends Component {
    constructor(props) {
        super(props)
        
    }
    renderlist() {
        let itemActiveStyle = {
            background: '#007AFF',
            color: 'white'
        }
        let items = []
        switch (this.props.listType) {
            case 'Countries':
            items = this.props.countries.map( item => <li style = { item === this.props.selectedCountry ? itemActiveStyle: null }  key = { uniqid() } onClick = { e => this.onListItemClick(e) }> {item} </li> ) 
                break;
            case 'Cities':
            items = this.props.sortedCities.map( item => <li style = { item === this.props.selectedCity ? itemActiveStyle: null }  key = { uniqid() } onClick = { e => this.onListItemClick(e) }> {item} </li> ) 
                break;
            case 'Companies':
            items = this.props.companies.map( item => <li style = { item === this.props.selectedCompany ? itemActiveStyle: null }  key = { uniqid() } onClick = { e => this.onListItemClick(e) }> {item} </li> ) 
                break;
            default:
                items = [];
        }
        return items
    }
    componentDidMount() {
        switch (this.props.listType) {
            case 'Countries':
            this.props.dispatch(getCounries())
                break;
            case 'Cities':
            this.props.dispatch(getCities())
                break;
            case 'Companies':
            this.props.dispatch(getCompanies())
            default:
                break;
        }
        
    }
    onListItemClick = (e) => {
        let selectedItem = e.target.textContent.trim()
        switch (this.props.listType) {
            case 'Countries':
                this.props.dispatch(setCountry(selectedItem))
                this.props.dispatch(getCities())
                this.props.dispatch(getCompanies())
                break;
            case 'Cities':
                this.props.dispatch(setCity(selectedItem))
                this.props.dispatch(getCompanies())
                break;
            case 'Companies':
                this.props.dispatch(setCompany(selectedItem))
                this.props.dispatch(setCompanyAddress())
                this.props.dispatch(getCompanyLocation())
            default:
                break;
        }
    }
    render() {
        return (
            <div className = { this.props.className + ' list-wrapper'}>
                <h3> { this.props.listType } </h3>
                <ul className = { this.props.className + ' list' }>
                    { this.renderlist() }
                </ul>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    countries: state.countries,
    selectedCountry: state.selectedCountry,
    sortedCities: state.sortedCities,
    selectedCity: state.selectedCity,
    companies: state.companies,
    selectedCompany: state.selectedCompany,
})
export default connect(mapStateToProps)(List2)

