import * as types from '../constants/actionTyeps';
import api from '../api/index';
import {receiveEntities, receiveResults} from './index'


function receiveArticles(result) {
    return {
        type: types.RECEIVE_ARTICLES,
        articles: result.articles
    }
}


export default function getArticlesLists(){
    return dispatch => {
        api.getArticles(articles => {
            dispatch(receiveEntities(articles.entities))
            dispatch(receiveArticles(articles.result))
        })
    }
}