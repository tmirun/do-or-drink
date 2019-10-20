import { SET_PLAYER_NUM_ACTION } from './../actions/playerNum.actions';
import playerNumReducer from './playerNum.reducer';
import { PlayerNumActionType } from '../actions/playerNum.actions';

describe('playerNumReducer', () => {
  it('should return the initial state', () => {
    expect(playerNumReducer(2, {} as PlayerNumActionType)).toEqual(2)
  })

  it('should return action value', () => {
    const action: PlayerNumActionType = {
      type: SET_PLAYER_NUM_ACTION,
      payload: 10
    }

    expect(playerNumReducer(0, action)).toEqual(10);
  })
})