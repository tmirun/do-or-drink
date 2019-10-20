import { connectRouter } from 'connected-react-router';
import { combineReducers } from "redux";
import { createBrowserHistory } from "history";
import playerNumReducer from './playerNum.reducer';
import cardsReducer from './cards.reducer';
export const history = createBrowserHistory()

export default combineReducers({
  playerNum: playerNumReducer,
  cards: cardsReducer,
  router: connectRouter(history),
});