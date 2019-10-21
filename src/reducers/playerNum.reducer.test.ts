import { SET_PLAYER_NUM } from './../actions/playerNum.actions';
import playerNumReducer from './playerNum.reducer';
import { PlayerNumAction } from '../actions/playerNum.actions';

describe('playerNumReducer', () => {
  it('should return the initial state', () => {
    expect(playerNumReducer(2, {} as PlayerNumAction)).toEqual(2)
  })

  it('should return action value', () => {
    const action: PlayerNumAction = {
      type: SET_PLAYER_NUM,
      payload: 10
    }

    expect(playerNumReducer(0, action)).toEqual(10);
  })
})