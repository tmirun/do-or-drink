import { CardStatus } from './../components/Card/Card';
import { GameAction, SELECT_CARD, INCLEMENT_COUNT, SET_CARD_STATUS } from './../actions/game.actions';

export type GameState = {
  count: number,
  selectedCard: string;
  status: CardStatus;
};

const initState: GameState = {
  count: 0,
  selectedCard: '',
  status: 'next'
};

export default function gameReducer (state = initState, action: GameAction): GameState {
  switch(action.type) {
    case SELECT_CARD:
      return {
        ...state, 
        selectedCard: action.payload
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

    default: 
      return state;
  }
} 