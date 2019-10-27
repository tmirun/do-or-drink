import React from "react";
import { mount, ReactWrapper } from 'enzyme';
import { PlayerNumForm } from './PlayerNumForm';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import wait from "waait";
import { SET_PLAYER_NUM } from "../../../actions/playerNum.actions";

const mockStore = configureStore([])

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => {},
}));

describe('PlayerNumForm', () => {
  const initialState = {}
  let store: any;
  let wrapper: ReactWrapper;

  beforeEach(() => {
    store = mockStore(initialState);

    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <PlayerNumForm/>
        </BrowserRouter>
      </Provider>
    )
  })
  
  it('should render correctlly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should show error message if user is less than 2', async () => {
    const inputEle = wrapper.find('input');

    inputEle.simulate('change', { 
      target: { name: 'playerNum', value: 0 },
    });
    inputEle.simulate("blur");
    await wait(0);
    wrapper.update();

    expect(wrapper.exists('.PlayerNumForm__error')).toEqual(true);
  }) 

  it('should hide error message if user is less than 2', async () => {
    const inputEle = wrapper.find('input');

    inputEle.simulate('change', { 
      target: { name: 'playerNum', value: 3 },
    });
    inputEle.simulate('blur');
    await wait(10);
    wrapper.update();

    expect(wrapper.exists('.PlayerNumForm__error')).toEqual(false);
  }) 

  it('should show trigger SET_PLAYER_NUM action', async () => {
    const value = 4; 
    const inputEle = wrapper.find('input');
    const formEle = wrapper.find('form');

    inputEle.simulate('change', { target: { name: 'playerNum', value }});
    inputEle.simulate("blur");
    formEle.simulate('submit');
    await wait(0);
    wrapper.update();
    
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: SET_PLAYER_NUM, payload: value })
  });
});
