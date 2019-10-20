import React from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import { AppRoutes } from './AppRoutes'

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
