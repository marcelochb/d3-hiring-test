import React from 'react';
import { render } from '@testing-library/react';
import { ButtonTheme } from '../components';
import { ThemeProvider } from 'styled-components';
import { light } from '../styles/themes';

describe('ButtonTheme Component', () => (
  it('Should be render ButtonTheme', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={light}>
        <ButtonTheme
          title={'Light'}
          changeTheme={() => { }}
        />
      </ThemeProvider>
    );
    const container = getByTestId('buttonTheme');

    expect(container).toBeTruthy();
  })

))