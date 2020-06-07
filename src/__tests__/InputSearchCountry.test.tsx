import React from 'react';
import { render } from '@testing-library/react';
import { InputSearchCountry } from '../components';
import { ThemeProvider } from 'styled-components';
import { light } from '../styles/themes';

describe('InputSearchCountry Component', () => (
  it('Should be render InputSearchCountry', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={light}>
        <InputSearchCountry
        />
      </ThemeProvider>
    );
    const container = getByTestId('inputSearchCountry');

    expect(container).toBeTruthy();
  })

))