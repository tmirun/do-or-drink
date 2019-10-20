import React from 'react'
import { PlayerNumForm } from './PlayerNumForm/PlayerNumForm'

import './Welcome.scss';

export const Welcome: React.FC = () => {
  return(
    <div className="Welcome">
      <div className="Welcome__box card">
        <h4>Choose player number</h4>
        <PlayerNumForm/>
      </div>
    </div>
  );
}