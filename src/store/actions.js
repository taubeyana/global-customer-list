import {store} from '../App';
import { mapObjectByProp, sortByNum } from '../services';
import clients from '../clients';

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_CITIES = "GET_CITIES";
export const GET_COMPANIES = "GET_COMPANIES";
export const SET_COUNTRY = "SET_COUNTRY";
export const SET_CITY = "SET_CITY";
export const SET_COMPANY = "SET_COMPANY";

export const setCountry = (payload) => ({
    type: SET_COUNTRY,
    payload
})
export const setCompany = (payload) => ({
    type: SET_COMPANY,
    payload
})
export const setCity = (payload) => ({
    type: SET_CITY,
    payload
})

export const getCounries = () => {
    const sortedCountries = sortByNum(mapObjectByProp(clients.Customers,'Country', 'City'));
    return {
        type: GET_COUNTRIES,
        payload: sortedCountries
    }
}
export const getCities = () => {
    const cities  = mapObjectByProp(clients.Customers,'City', 'CompanyName', 'Country', store.getState().selectedCountry)
    return {
        type: GET_CITIES,
        payload: cities,
        sortedCities: sortByNum(cities)
    }
}
export const getCompanies = () => {
    const companiesByCity  = store.getState().cities[store.getState().selectedCity].sort()
    return {
        type: GET_COMPANIES,
        payload: companiesByCity
    }
}