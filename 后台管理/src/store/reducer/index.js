import {combineReducers} from 'redux';


import admin from './admin'
import reader from './reader'
import writer from './writer'
import news from './news'

let rootReducer = combineReducers({
    admin,
    reader,
    writer,
    news
})
export default rootReducer;