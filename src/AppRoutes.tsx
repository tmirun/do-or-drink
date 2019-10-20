import { Welcome } from './pages/Welcome/Welcome';
import React from 'react';
import { Route } from 'react-router';

export const ROUTE_WELLCOME_PATH = '/';
export const ROUTE_PREPARATION_PATH = '/preparation';

export const AppRoutes: React.FC = () => {
  return (
    <>
      <Route path="/" component={Welcome} ></Route>
    </>
  );
}