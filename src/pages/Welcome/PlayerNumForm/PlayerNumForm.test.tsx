import React from "react";
import { shallow, mount, ReactWrapper } from 'enzyme';
import { PlayerNumForm } from './PlayerNumForm';

describe('PlayerNumForm', () => {
  it('should render correctlly', () => {
    let playerNumform = shallow(<PlayerNumForm/>)
    expect(playerNumform).toMatchSnapshot();
  })
});
