import { SET_PLAYER_NUM } from './../actions/playerNum.actions';
import { PlayerNumAction } from "../actions/playerNum.actions";

export type PlayerNumState = number;

export const playerNumInitState = 0;

export default function playerNumReducer (state = playerNumInitState, action: PlayerNumAction): PlayerNumState {
  switch(action.type) {
    case SET_PLAYER_NUM:
      return action.payload;
    default: 
      return state;
  }
} 