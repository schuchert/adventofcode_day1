/**
 * @format
 */

import 'react-native';
import React from 'react';
import {beforeEach, describe, it} from '@jest/globals'; // Note: test renderer must be required after react-native.
import {render, RenderAPI} from '@testing-library/react-native';
import {App} from '../App';

describe('basic advent project screen layout', () => {
  let theApp: RenderAPI;

  beforeEach(() => {
    theApp = render(<App />);
  });

  it('has an input area', () => {
    theApp.getByLabelText('input');
  });

  it('has an output area', () => {
    theApp.getByLabelText('output');
  });

  it('has a go button', () => {
    theApp.getByLabelText('go');
  });
});
