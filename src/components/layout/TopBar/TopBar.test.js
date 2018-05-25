import { shallow } from 'enzyme';
import * as React from 'react';
import { TopBar } from './TopBar';

const mockMuiTheme = {
  palette: {},
};

describe('TopBar', () => {
  it('creates without crash', () => {
    const wrapper = shallow(<TopBar muiTheme={mockMuiTheme}/>);
  });
});
