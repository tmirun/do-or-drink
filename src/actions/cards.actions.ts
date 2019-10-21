export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';

interface AddCard {
  type: typeof ADD_CARD,
  payload: string;
}

interface EditCard {
  type: typeof EDIT_CARD,
  payload: {
    index: number;
    text: string;
  }
}

export type CardAction = AddCard | EditCard;

export function addCard(text: string): AddCard {
  return {
    type: ADD_CARD,
    payload: text
  }
}

export function editCard(index: number,text: string): EditCard {
  return {
    type: EDIT_CARD,
    payload: { index, text }
  }
}