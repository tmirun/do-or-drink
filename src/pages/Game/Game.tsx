import React, { useEffect } from 'react'
import './Game.scss';
import { Card, CardStatus } from '../../components/Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../reducers';
import { selectRandomCard } from '../../actions/game.actions';

const nextOrEdit = () => {
  return Math.round(Math.random()) ? 'next' : 'edit';
}

export const Game: React.FC = () => {
  const dispath = useDispatch();
  const cards = useSelector<AppState, string[]>( state => state.cards);
  const selectedCard = useSelector<AppState, string>(state => {
    return state.game.selectedCard
  });
  const cardStatus: CardStatus = nextOrEdit();

  useEffect(() => {
    if (selectedCard.length === 0) {
      dispath(selectRandomCard(cards));
    }
  }, [])

  const onSubmit = () => {
    console.log('dispath')
    dispath(selectRandomCard(cards));
  }

  return (
    <div className="Game">
      <Card status={cardStatus} text={selectedCard} onSubmit={onSubmit}/>
    </div>
  );
}