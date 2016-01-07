import { RECEIVE_COMMENTS } from '../constants/actionTyeps'

export function getComment(state, id) {

    return state.entities.comments[id];
}

export function getAllComments(state){

    let ids = state.result.comments || [];
    return ids.map(id => getComment(state, id))
}

export default function comments(state = [], action) {
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return [...state, ...action.comments]
        default:
            return state
    }
}