import { combineReducers } from 'redux';
import forumListReducer from './forumList';



let rootReducer = combineReducers({
    cart: function () { return {} },
    forumList:forumListReducer
    // common: commonReducer
})
export default rootReducer;