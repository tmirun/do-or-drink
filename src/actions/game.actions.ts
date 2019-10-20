import { CardStatus } from './../components/Card/Card';
export const SELECT_CARD = 'SELECT_CARD';
export const INCLEMENT_COUNT = 'INCLEMENT_COUNT';
export const SET_CARD_STATUS = 'SET_CARD_STATUS';

interface SelectCard {
  type: typeof SELECT_CARD
  payload: string
}

interface InclementCount {
  type: typeof INCLEMENT_COUNT,
}

interface SetCardStatus {
  type: typeof SET_CARD_STATUS,
  payload: CardStatus
}

export type GameAction = SelectCard | InclementCount | SetCardStatus;

export function selectRandomCard(cards: string[]): SelectCard {
  return {
    type: SELECT_CARD,
    payload: cards[Math.floor(Math.random() * cards.length)]
  }
}

export function InclementCount(index: number,text: string): InclementCount {
  return {
    type: INCLEMENT_COUNT
  }
}