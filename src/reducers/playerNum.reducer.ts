import { SET_PLAYER_NUM_ACTION } from './../actions/playerNum.actions';
import { PlayerNumAction } from "../actions/playerNum.actions";

export type PlayerNumState = number;

export default function playerNumReducer (state = 0, action: PlayerNumAction): PlayerNumState {
  switch(action.type) {
    case SET_PLAYER_NUM_ACTION:
      return action.payload;
    default: 
      return state;
  }
} 