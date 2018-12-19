import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './ClientsList.css';
import MapItem from '../Map/Map';
import Modal from '../../common/Modal/Modal'
import List from '../../common/List/List'

class ClientsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: true,
        }
    }
    toggleModal = () => {
        this.setState({ 
            modalOpen: !this.state.modalOpen
        })
    }
    render() {
        return (
            <Fragment>
                <Modal className = "modal"
                        modalOpen = { this.state.modalOpen }
                        modalClose = { this.toggleModal }>
                    <div className = 'header-wrapper'></div>
                    <div className = 'clients-list-wrapper'>
                        <List className = 'countries' listType = 'Countries'/>
                        <List className = 'cities' listType = 'Cities'/>
                        <List className = 'companies' listType = 'Companies'/>
                        <MapItem address = { this.props.selectedCompany } 
                                location = { this.props.selectedCompanyLocation } />
                    </div>
                </Modal>
                <button onClick = { this.toggleModal }> Show Clients </button>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    selectedCompany: state.selectedCompany,
    selectedCompanyLocation: state.selectedCompanyLocation,
})
export default connect(mapStateToProps)(ClientsContainer)