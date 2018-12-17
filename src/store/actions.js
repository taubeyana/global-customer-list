import { store } from '../App';
import { sortByNum } from '../services';
import  { clientsObject } from '../clients';
import Geocode from 'react-geocode';

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_CITIES = "GET_CITIES";
export const GET_COMPANIES = "GET_COMPANIES";
export const SET_COUNTRY = "SET_COUNTRY";
export const SET_CITY = "SET_CITY";
export const SET_COMPANY = "SET_COMPANY";
export const SET_COMPANY_LOCATION = "SET_COMPANY_LOCATION";

export const setCountry = (payload) => ({
    type: SET_COUNTRY,
    payload
})

export const setCompanyLocation = (payload) => ({
        type: SET_COMPANY_LOCATION,
        payload: payload
})

export const setCompany = (payload) => ({
    type: SET_COMPANY,
    payload: payload
    
})
export const getCompanyLocation = () => {
    return dispatch => {
        Geocode.setApiKey("AIzaSyDSFNqoNb2-zScnVQSaG-emwNPCeANWqyc");
        Geocode.fromAddress(store.getState().selectedCompany)
        .then(response => {
            dispatch(setCompanyLocation(response.results[0].geometry.location)) ;
        },
        error => {
            console.error(error);
        });
    }
}
export const setCity = (payload) => ({
    type: SET_CITY,
    payload
})

export const getCounries = () => {
    const sortedCountries = sortByNum(clientsObject,'cities');
    return {
        type: GET_COUNTRIES,
        payload: sortedCountries,
        selectedCountry: sortedCountries[0]
    }
}
export const getCities = () => {
    const sortedCities = sortByNum(clientsObject[store.getState().selectedCountry]['cities'],'companies');
    return {
        type: GET_CITIES,
        sortedCities: sortedCities
    }
}

export const getCompanies = () => {
    const companiesByCity  = Object.keys(clientsObject[store.getState().selectedCountry]['cities'][store.getState().selectedCity]['companies']).sort()
    return {
        type: GET_COMPANIES,
        payload: companiesByCity
    }
}