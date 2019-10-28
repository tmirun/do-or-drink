import { AppState } from './../reducers/index';
import Axios from 'axios';

const serverUrl = "http://localhost:3100";

export const getState = async (): Promise<AppState> => {
  const result = await Axios.get<AppState>(`${serverUrl}/state`);
  return result.data;
}

export const saveState = async (state: AppState) => {
  return await Axios.post(`${serverUrl}/state`, state);
}
