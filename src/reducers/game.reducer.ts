import { GameAction, SELECT_CARD, INCLEMENT_COUNT } from './../actions/game.actions';

export type GameState = {
  count: number,
  selectedCard: string | null;
};

const initState: GameState = {
  count: 0,
  selectedCard: null
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

    default: 
      return state;
  }
} 