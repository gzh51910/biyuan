import {combineReducers} from 'redux';


import admin from './admin'
import reader from './reader'
import writer from './writer'

let rootReducer = combineReducers({
    admin,
    reader,
    writer
})
export default rootReducer;