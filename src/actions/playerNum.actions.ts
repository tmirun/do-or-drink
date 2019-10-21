export const SET_PLAYER_NUM = 'SET_PLAYER_NUM';

interface SetPlayerNum {
  type: typeof SET_PLAYER_NUM,
  payload: number;
}

export type PlayerNumAction = SetPlayerNum;

export function setPlayerNum(num: number): SetPlayerNum {
  return {
    type: SET_PLAYER_NUM,
    payload: num
  }
}