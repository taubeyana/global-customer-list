import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './ClientsList.css';
import List from '../../common/List/List';
import uniqid from 'uniqid'
import MapItem from '../Map/Map';
import Modal from '../../common/Modal/Modal'
import { 
    setCountry,
    setCity, 
    getCounries, 
    getCities, 
    getCompanies, 
    setCompany, 
    getCompanyLocation
} from '../../store/actions'
// import List from '../../common/List/List';

class ClientsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: true,
            selectedItem: false
        }
    }
    toggleModal = () => {
        this.setState({ 
            modalOpen: !this.state.modalOpen
        })
    }
    componentDidMount() {
        this.props.dispatch(getCounries())
        this.props.dispatch(getCities())
        this.props.dispatch(getCompanies())
    }
    handleListItemClick = (e) => {
        this.setSelectedItem(e)
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
        this.props.dispatch(getCompanyLocation())
    }
    setSelectedItem = (e) => {
        // if (this.props.selectedCompany === e.target.textContent ) {
        //     e.target.background = 'red'
        // }
        console.log(e.target)
        // e.target.style.background = 'black'
        this.setState({ 
            selectedItem: true
        })
    }
    renderList() {
        return 
    }
    
    render() {
        return (
            <Fragment>
                <Modal className = "modal"
                    modalOpen = { this.state.modalOpen }
                    modalClose = { this.toggleModal }>
                    <div className = 'header-wrapper'></div>
                    <div className = 'clients-list-wrapper'>
                        <List className = 'coutries' onClick = { this.handleListItemClick } data = { this.props.countries }><h3> Countries </h3></List>
                        <List className = 'cities' onClick = { this.handleOnCityClick } data = { this.props.sortedCities }><h3> Cities </h3></List>
                        <List className = 'companies' onClick = { this.handleOnCompanyClick } data = { this.props.companies }><h3> Company </h3> </List>
                        <MapItem address = { this.props.selectedCompany } location = { this.props.selectedCompanyLocation } />
                    </div>
                </Modal>
                <button onClick = { this.toggleModal }> Show Clients </button>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    countries: state.countries,
    sortedCities: state.sortedCities,
    companies: state.companies,
    selectedCompany: state.selectedCompany,
    selectedCompanyLocation: state.selectedCompanyLocation
})
export default connect(mapStateToProps)(ClientsList)


// <ul>
// { this.props.countries.map(item => <Listi selected = {this.state.selectedItem } key = {uniqid() } onClick = {this.setSelectedItem} >{item} </Listi>)}
//         </ul>



// <ul>
// { this.props.countries.map(item => <Listi key = {uniqid() } >{item} </Listi>)}
// </ul>