export const SELECT_CARD = 'SELECT_CARD';
export const INCLEMENT_COUNT = 'INCLEMENT_COUNT';

interface SelectCard {
  type: typeof SELECT_CARD
  payload: string
}

interface InclementCount {
  type: typeof INCLEMENT_COUNT,
}

export type GameAction = SelectCard | InclementCount;

export function selectRandomCard(card: string): SelectCard {
  return {
    type: SELECT_CARD,
    payload: card
  }
}

export function editCard(index: number,text: string): InclementCount {
  return {
    type: INCLEMENT_COUNT
  }
}