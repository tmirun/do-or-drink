import React from 'react'
import { refreshAllState } from '../../actions/global.actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { initState } from '../../reducers';
import { ROUTE_WELLCOME_PATH } from '../../AppRoutes';

import './ResetButton.scss';

export const ResetButton: React.FC = () => {
  const dispath = useDispatch();
  const history = useHistory();

  const resetGame = () => {
    dispath(refreshAllState(initState));
    history.push(ROUTE_WELLCOME_PATH);
  }

  return (
    <button className="ResetButton btn" onClick={resetGame}> RESET GAME </button>
  )
}