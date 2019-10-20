import { ADD_CARD_ACTION, CardAction, EDIT_CARD_CATION } from './../actions/cards.actions';

type Card = string;

export type CardsState = Card[];

const initState = [] as Card[];

export default function cardsReducer (state = initState, action: CardAction): CardsState {
  switch(action.type) {
    case ADD_CARD_ACTION:
      return [...state, action.payload];

    case EDIT_CARD_CATION:
      const newState = [...state];
      newState[action.payload.index] = action.payload.text
      return newState;

    default: 
      return state;
  }
} 