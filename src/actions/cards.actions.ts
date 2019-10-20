export const ADD_CARD_ACTION = 'ADD_CARD_ACTION';
export const EDIT_CARD_CATION = 'EDIT_CARD_CATION';

interface AddCard {
  type: typeof ADD_CARD_ACTION,
  payload: string;
}

interface EditCard {
  type: typeof EDIT_CARD_CATION,
  payload: {
    index: number;
    text: string;
  }
}

export type CardAction = AddCard | EditCard;

export function addCard(text: string): AddCard {
  return {
    type: ADD_CARD_ACTION,
    payload: text
  }
}

export function editCard(index: number,text: string): EditCard {
  return {
    type: EDIT_CARD_CATION,
    payload: { index, text}
  }
}