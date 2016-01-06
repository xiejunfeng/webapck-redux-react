import { combineReducers } from 'redux';
import * as types from '../constants/actionTyeps'
import result from './result'
import entities from './entity'

export default function toApp(state) {

  return state;
}

export default combineReducers({
  result,
  entities
});