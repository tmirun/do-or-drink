import React from 'react'
import { PlayerNumForm } from './PlayerNumForm/PlayerNumForm'

export const Welcome: React.FC = () => {
  return(
    <div>
      <div>welcome page</div>
      <div>Choose player number</div>
      <PlayerNumForm/>
    </div>
  );
}