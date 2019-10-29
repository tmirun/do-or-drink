import React, { useState, useEffect } from 'react';
import { Switch, useHistory } from 'react-router-dom';
import { AppRoutes, ROUTE_GAME_PATH } from './AppRoutes'
import { store } from './stores/store';
import { saveState, getState } from './apis/state.api';
import { refreshAllState } from './actions/global.actions';
import { useDispatch } from 'react-redux';

import './App.scss';

const App: React.FC = () => {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();
  
  useEffect(() => {
    store.subscribe(() => {
      saveState(store.getState())
    })
    const getStateFromServer = async () => {
      try {
        const state = await getState();
        dispatch(refreshAllState(state));
        if (state.game && state.game.start) {
          history.push(ROUTE_GAME_PATH)
        }
      } catch (e) {
        alert(`server error, some thing happen: ${e.message}`)
      }
      setLoading(false);
    }
    getStateFromServer();
    // eslint-disable-next-line 
  }, [])

  return (
    <div className="App">
      {loading ? 
        <div>LOADING</div> :
        <Switch>
          <AppRoutes/>
        </Switch>
      }
      <a className="App__download" href="http://localhost:3100/downloadJson">Download state</a>
    </div>
  );
}

export default App;
