import {
    GET_COUNTRIES,
    GET_COMPANIES,
    GET_CITIES,
    SET_COUNTRY,
    SET_COMPANY,
    SET_COMPANY_LOCATION,
    SET_CITY 
} from '../store/actions';
    

const initialState = {
    countries: [],
    cities: [],
    companies: [],
    sortedCities: [],
    selectedCountry: 'USA',
    selectedCity: 'Portland',
    selectedCompany: 'Lonesome Pine Restaurant',
    selectedCompanyLocation:  {lat: 45.5020266, lng: -73.560358}
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
                cities: action.payload,
                sortedCities: action.sortedCities,
                selectedCity: action.sortedCities[0]
            })
        case GET_COUNTRIES:
            return ({
                ...state, 
                countries: action.payload
            })
        case GET_COMPANIES:
            return ({
                ...state, 
                companies: action.payload
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