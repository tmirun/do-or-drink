import { CardStatus } from './../components/Card/Card';
export const SELECT_CARD = 'SELECT_CARD';
export const INCLEMENT_COUNT = 'INCLEMENT_COUNT';
export const SET_CARD_STATUS = 'SET_CARD_STATUS';

interface SelectRandomCard {
  type: typeof SELECT_CARD
  payload: {
    card: string,
    index: number
  }
}

interface InclementCount {
  type: typeof INCLEMENT_COUNT,
}

interface SetCardStatus {
  type: typeof SET_CARD_STATUS,
  payload: CardStatus
}

export type GameAction = SelectRandomCard | InclementCount | SetCardStatus;

export function selectRandomCard(cards: string[]): SelectRandomCard {
  const index = Math.floor(Math.random() * cards.length);
  const card = cards[index];
  return {
    type: SELECT_CARD,
    payload: { card, index }
  }
}

export function inclementCount(index: number,text: string): InclementCount {
  return {
    type: INCLEMENT_COUNT
  }
}