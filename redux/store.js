import { createStore, applyMiddleware } from 'redux'
import { combReducer } from './reducer'
import thunk from 'redux-thunk'

const store = createStore(combReducer,applyMiddleware(thunk))
// store.dispatch(updateList({foo:'foo'}))
// store.dispatch(updateList({bar:'bar'}))
// store.dispatch(updateList({foo:'baz'}))

// store.dispatch({type:COUNTRY_SELECT, payload:{country:'México'}})
// store.dispatch({type:COUNTRY_SELECT, payload:{country:'Pene'}})

// console.log(store.getState())

export default store