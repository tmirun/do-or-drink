import { CardStatus } from './../components/Card/Card';

export const SELECT_CARD = 'SELECT_CARD';
export const INCLEMENT_COUNT = 'INCLEMENT_COUNT';
export const SET_CARD_STATUS = 'SET_CARD_STATUS';
export const START_GAME = 'START_GAME';

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

interface StartGame {
  type: typeof START_GAME
}

export type GameAction = SelectRandomCard | InclementCount | SetCardStatus | StartGame;

export function selectRandomCard(cards: string[]): SelectRandomCard {
  const index = Math.floor(Math.random() * cards.length);
  const card = cards[index];
  return {
    type: SELECT_CARD,
    payload: { card, index }
  }
}

const nextOrEdit = (): CardStatus => {
  return Math.round(Math.random()) ? 'next' : 'edit';
}

export function setRandomCardStatus(): SetCardStatus {
  return {
    type: SET_CARD_STATUS,
    payload: nextOrEdit()
  }
}

export function inclementCount(index: number,text: string): InclementCount {
  return {
    type: INCLEMENT_COUNT
  }
}

export function startGame() {
  return {
    type: START_GAME
  }
}