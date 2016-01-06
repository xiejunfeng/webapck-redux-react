import { RECEIVE_ENTITIES } from '../constants/actionTyeps'
import { combineReducers } from 'redux';
import articles from './article'


export default combineReducers({
    articles
});