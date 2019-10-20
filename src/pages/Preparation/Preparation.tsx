import React, { useEffect } from 'react'
import './Preparation.scss';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../reducers';
import { createSelector } from 'reselect';
import { Card } from '../../components/Card/Card';
import { addCard } from '../../actions/cards.actions';
import { useHistory } from 'react-router';

const addCardsNumSelect = createSelector<AppState, number, number, number>( 
  (state) => state.playerNum,
  (state) => state.cards.length,
  (playerNum, cardsNum) => playerNum - cardsNum
)

export const Preparation: React.FC = () => {
  const addCardsNum = useSelector(addCardsNumSelect);
  const store = useSelector(store => store);
  const dispath = useDispatch();
  const history = useHistory();

  const onCardSubmit = (text: string) => {
    dispath(addCard(text));
    history.push('/game');
  }

  return(
    <div className="Preparation">
      <div>WRITE SOME CARD</div>
      <Card status="add" onSubmit={onCardSubmit}/>
    </div>
  );
}