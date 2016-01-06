import { RECEIVE_ENTITIES } from '../constants/actionTyeps'
import lodash from 'lodash'

const initialState = {
    articles: {},
}



export default function entities(state = initialState, action) {

    switch (action.type) {
        case RECEIVE_ENTITIES:
            return lodash.merge(state, action.entities)
        default:
            return state
    }
}