import {
    GET_COUNTRIES,
    GET_COMPANIES,
    GET_CITIES,
    SET_COUNTRY,
    SET_COMPANY,
    SET_COMPANY_LOCATION,
    SET_CITY,
    SET_COMPANY_ADDRESS
} from '../store/actions';
    

const initialState = {
    countries: [],
    companies: [],
    sortedCities: [],
    selectedCountry: null,
    selectedCity: null,
    selectedCompany: null,
    selectedCompanyLocation:  {lat: 45.5020266, lng: -73.560358},
    selectedCompanyAddress: null

}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRY:
            return ({
                ...state, 
                selectedCountry: action.payload
            })
        case GET_CITIES:
            return ({
                ...state, 
                sortedCities: action.sortedCities,
                selectedCity: action.selectedCity
            })
        case GET_COUNTRIES:
            return ({
                ...state, 
                countries: action.payload,
                selectedCountry: action.selectedCountry,
            })
        case GET_COMPANIES:
            return ({
                ...state, 
                companies: action.payload,
            })
        case SET_COMPANY:
            return ({
                ...state, 
                selectedCompany: action.payload
            })
        case SET_COMPANY_LOCATION:
            return ({
                ...state, 
                selectedCompanyLocation: action.payload
            })
        case SET_COMPANY_ADDRESS:
            return ({
                ...state, 
                selectedCompanyAddress: action.payload
            })
        case SET_CITY:
            return ({
                ...state, 
                selectedCity: action.payload
            })
        default:
            return state;
    }
}

export default rootReducer;