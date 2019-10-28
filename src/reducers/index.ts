import { GlobalAction } from './../actions/global.actions';
import { connectRouter } from 'connected-react-router';
import { combineReducers, AnyAction } from "redux";
import { createBrowserHistory } from "history";
import playerNumReducer, { playerNumInitState } from './playerNum.reducer';
import cardsReducer, { cardsInitState } from './cards.reducer';
import gameReducer, { gameInitState } from './game.reducer';
import globalReducer from './global.reducer';

export const history = createBrowserHistory()

export const initState: AppState = {
  playerNum: playerNumInitState,
  cards: cardsInitState,
  game: gameInitState,
  router: undefined,
}

const reducers = combineReducers({
  playerNum: playerNumReducer,
  cards: cardsReducer,
  game: gameReducer,
  router: connectRouter(history),
});

const state = (state: any, action: AnyAction): any => {
  const intermediateState = reducers(state, action);
  const finalState = {...intermediateState, ...globalReducer(intermediateState, action as GlobalAction)}
  return finalState;
}

export default state;

export type AppState = ReturnType<typeof state>