import React, { useEffect, useState } from 'react'
import './Preparation.scss';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../reducers';
import { Card, CardFormValues } from '../../components/Card/Card';
import { addCard } from '../../actions/cards.actions';
import { useHistory } from 'react-router';
import { FormikActions } from 'formik';
import { startGame } from '../../actions/game.actions';
import { ResetButton } from '../../components/ResetButton/ResetButton';

export const Preparation: React.FC = () => {
  const playerNum = useSelector<AppState, number>((state) => state.playerNum);
  const [addCardsNum, setAddCardsNum] = useState(playerNum);
  const dispath = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (addCardsNum <= 0) {
      dispath(startGame());
      history.push('/game');
    }
    // eslint-disable-next-line
  }, [addCardsNum, history])

  const onCardSubmit = (text: string, {resetForm}: FormikActions<CardFormValues>) => {
    dispath(addCard(text));
    setAddCardsNum(addCardsNum - 1);
    resetForm();
  }

  return(
    <div className="Preparation">
      <h2>YOU need write {addCardsNum} cards</h2>
      <Card status="add" onSubmit={onCardSubmit}/>
      <ResetButton/>
    </div>
  );
}