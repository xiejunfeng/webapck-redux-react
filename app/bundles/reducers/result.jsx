import { RECEIVE_ENTITIES } from '../constants/actionTyeps'
import { combineReducers } from 'redux';
import articles from './article'
import comments from './comment'


export default combineReducers({
    articles,
    comments
});