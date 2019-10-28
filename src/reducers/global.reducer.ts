import { GlobalAction } from './../actions/global.actions';
import { REFRESH_ALL_STATE } from '../actions/global.actions';
import { AppState } from './index';

export default function globalReducer (state: AppState, action: GlobalAction): AppState {
  switch(action.type) {
    case REFRESH_ALL_STATE:
      return Object.assign({}, action.payload)
    default: 
      return state;
  }
} 