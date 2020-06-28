import {loadCountries} from '../Utils/Api'

//action types
export const COUNTRY_SELECT = 'COUNTRY_SELECT'
export const UPDATE_LIST = 'UPDATE_LIST'
export const SENT_REQUEST = 'SENT_REQUEST'
export const COUNTRIES_LOADED = 'COUNTRIES_LOADED'
export const COUNTRIES_ERROR = 'COUNTRIES_ERROR'

//action creators
export const updateList = () => dispatch => {
    dispatch({type: SENT_REQUEST})
    loadCountries()
    .then(countryList => {
        dispatch({type: COUNTRIES_LOADED, payload: countryList})
    })
    .catch(err => {
        dispatch({type: COUNTRIES_ERROR})
    })
}

export const updateCountrySelected = update => ({
    type: COUNTRY_SELECT,
    payload: update,
})

