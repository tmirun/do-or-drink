import { AppState } from './../reducers/index';
export const REFRESH_ALL_STATE = 'REFRESH_ALL_STATE';

interface RefreshAllState {
  type: typeof REFRESH_ALL_STATE,
  payload: AppState;
}

export type GlobalAction = RefreshAllState;

export function refreshAllState(newState: AppState): GlobalAction {
  return {
    type: REFRESH_ALL_STATE,
    payload: newState
  }
}