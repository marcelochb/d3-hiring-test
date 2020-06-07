import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '../components';
import { ThemeProvider } from 'styled-components';
import { light } from '../styles/themes';

describe('Header Component', () => (
  it('Should render Header component', () => {

    const { getByTestId } = render(
      <ThemeProvider theme={light}>
        <Header changeTheme={() => { }} />
      </ThemeProvider>
    )
    const container = getByTestId('header');

    expect(container).toHaveTextContent('Where in the World?')
  })
))