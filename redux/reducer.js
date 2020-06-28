import { combineReducers } from 'redux'
import {COUNTRY_SELECT, UPDATE_LIST, SENT_REQUEST, COUNTRIES_LOADED, COUNTRIES_ERROR} from './actions'
import {loadCountries} from '../Utils/Api'

const merge = (prev,next) => Object.assign({},prev,next)

const DEFAULT_STATE = {
    loading: true, 
    countrySelected: "nada que ver",
    countryList: [],
    error: "",
}

const userReducer = (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case COUNTRY_SELECT:
            return merge(state,action.payload)  
        case COUNTRIES_ERROR:
            return merge(state,{error: action.payload})
        case SENT_REQUEST:
            return merge(state,{loading:true})
        case COUNTRIES_LOADED:
            return merge(state,{countryList: action.payload,loading: false})
        default:
            return state
    }
}

export const combReducer = combineReducers({
    User: userReducer,
})

