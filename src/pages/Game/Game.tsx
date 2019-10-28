import React, { useEffect } from 'react'
import './Game.scss';
import { Card, CardStatus } from '../../components/Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../reducers';
import { selectRandomCard, setRandomCardStatus } from '../../actions/game.actions';
import { editCard } from '../../actions/cards.actions';
import { ResetButton } from '../../components/ResetButton/ResetButton';

export const Game: React.FC = () => {
  const cards = useSelector<AppState, string[]>( state => state.cards);
  const selectedCard = useSelector<AppState, string>(state =>  state.game.selectedCard);
  const selectedIndex = useSelector<AppState, number>(state =>  state.game.selectedIndex);
  const selectedStatus = useSelector<AppState, CardStatus>(state => state.game.status);
  const dispath = useDispatch();

  useEffect(() => {
    if (selectedCard.length === 0) {
      dispath(selectRandomCard(cards));
    }
    // eslint-disable-next-line
  }, [])

  const onSubmit = (text: string) => {
    if(selectedStatus === 'edit') {
      dispath(editCard(selectedIndex, text))
    }
    dispath(selectRandomCard(cards));
    dispath(setRandomCardStatus());
  }

  return (
    <div className="Game">
      { selectedStatus === 'next' ?
        <h2><b>DO</b> &darr; OR <b>DRINK</b> &#9832;</h2> : 
        <h2>you are very LUCKY, you CAN EDIT &#9998; this card text </h2>
      }
      <Card status={selectedStatus} text={selectedCard} onSubmit={onSubmit}/>
      <ResetButton/>
    </div>
  );
}