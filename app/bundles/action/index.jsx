import * as types from '../constants/actionTyeps';

export function receiveEntities(entities){
    return {
        type: types.RECEIVE_ENTITIES,
        entities
    }
}

export function receiveResults(result){
    return {
        type: types.RECEIVE_RESULTS,
        result
    }
}