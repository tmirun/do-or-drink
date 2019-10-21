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
    dispath(selectRandomCard(cards));
  }

  return (
    <div className="Game">
      { cardStatus === 'next' ?
        <h2><b>DO</b> &darr; OR <b>DRINK</b> &#9832;</h2> : 
        <h2>you are very LUCKY, you CAN EDIT &#9998; this card text </h2>
      }
      <Card status={cardStatus} text={selectedCard} onSubmit={onSubmit}/>
    </div>
  );
}