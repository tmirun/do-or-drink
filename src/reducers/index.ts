import { connectRouter } from 'connected-react-router';
import { combineReducers } from "redux";
import { createBrowserHistory } from "history";
import playerNumReducer from './playerNum.reducer';
import cardsReducer from './cards.reducer';
import gameReducer from './game.reducer';
export const history = createBrowserHistory()

const state = combineReducers({
  playerNum: playerNumReducer,
  cards: cardsReducer,
  game: gameReducer,
  router: connectRouter(history),
});

export default state;

export type AppState = ReturnType<typeof state>