export const SET_PLAYER_NUM_ACTION = 'SET_PLAYER_NUM_ACTION';

interface SetPlayerNumActionType {
  type: typeof SET_PLAYER_NUM_ACTION,
  payload: number;
}

export type PlayerNumActionType = SetPlayerNumActionType;

export function setPlayerNum(num: number): SetPlayerNumActionType {
  return {
    type: SET_PLAYER_NUM_ACTION,
    payload: num
  }
}