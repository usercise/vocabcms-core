import * as React from 'react';
import { shallow } from 'enzyme';
import VocabCMS from './VocabCMS';
import 'jest-enzyme';

it('renders a browser router', () => {
    const cms = shallow(<VocabCMS />);
    expect(cms.text()).toEqual('<BrowserRouter />');
});
