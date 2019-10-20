import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { AppRoutes } from './AppRoutes'

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
       <Switch>
         <AppRoutes/>
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
