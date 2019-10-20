import { Welcome } from './pages/Welcome/Welcome';
import React from 'react';
import { Route } from 'react-router';
import { Preparation } from './pages/Preparation/Preparation';
import { Game } from './pages/Game/Game';

export const ROUTE_WELLCOME_PATH = '/';
export const ROUTE_PREPARATION_PATH = '/preparation';
export const ROUTE_GAME_PATH = '/game';

export const AppRoutes: React.FC = () => {
  return (
    <>
      <Route path={ROUTE_WELLCOME_PATH} exact component={Welcome} ></Route>
      <Route path={ROUTE_PREPARATION_PATH} component={Preparation} ></Route>
      <Route path={ROUTE_GAME_PATH} component={Game} ></Route>
    </>
  );
}