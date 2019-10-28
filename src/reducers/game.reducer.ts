import { CardStatus } from './../components/Card/Card';
import { GameAction, SELECT_CARD, INCLEMENT_COUNT, SET_CARD_STATUS, START_GAME } from './../actions/game.actions';

export interface GameState {
  count: number,
  selectedCard: string;
  status: CardStatus;
  selectedIndex: number,
  start: boolean,
};

export const gameInitState: GameState = {
  count: 0,
  selectedCard: '',
  selectedIndex: 0,
  status: 'next',
  start: false,
};

export default function gameReducer (state = gameInitState, action: GameAction): GameState {
  switch(action.type) {
    case SELECT_CARD:
      return {
        ...state,
        selectedCard: action.payload.card,
        selectedIndex: action.payload.index
      };

    case INCLEMENT_COUNT:
      return {
        ...state, 
        count: state.count + 1
      };

    case SET_CARD_STATUS:
      return {
        ...state,
        status: action.payload
      };

    case START_GAME:
      return {
        ...state,
        start: true
      };

    default: 
      return state;
  }
} 