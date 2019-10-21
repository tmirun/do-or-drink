import { ADD_CARD, CardAction, EDIT_CARD } from './../actions/cards.actions';

export type CardsState = string[];

const initState: CardsState = [
  'besa al siguiente jugador',
  'levanta y dar 3 vueltas',
  'cuentame un secreto que no me quieres contar'
];

export default function cardsReducer (state = initState, action: CardAction): CardsState {
  switch(action.type) {
    case ADD_CARD:
      return [...state, action.payload];

    case EDIT_CARD:
      const newState = [...state];
      newState[action.payload.index] = action.payload.text
      return newState;

    default: 
      return state;
  }
} 