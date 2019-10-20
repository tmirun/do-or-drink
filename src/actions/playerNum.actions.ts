export const SET_PLAYER_NUM_ACTION = 'SET_PLAYER_NUM_ACTION';

interface SetPlayerNum {
  type: typeof SET_PLAYER_NUM_ACTION,
  payload: number;
}

export type PlayerNumAction = SetPlayerNum;

export function setPlayerNum(num: number): SetPlayerNum {
  return {
    type: SET_PLAYER_NUM_ACTION,
    payload: num
  }
}