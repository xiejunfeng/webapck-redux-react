import { RECEIVE_ARTICLES } from '../constants/actionTyeps'


export function getArticle(state, id) {

    return state.entities.articles[id];
}

export function getAllArticles(state){

    let ids = state.result.articles || [];
    return ids.map(id => getArticle(state, id))
}

export default function articles(state = [], action) {
    switch (action.type) {
        case RECEIVE_ARTICLES:
            return [...state, ...action.articles]
        default:
            return state
    }
}