import React, { useContext } from 'react';

import { Container, Content } from './styles';
import { ThemeContext } from 'styled-components';
import { TypesHeader } from '../../utils/types';
import { ButtonTheme } from '../ButtonTheme';

export const Header: React.FC<TypesHeader> = ({ changeTheme }) => {
  const { title } = useContext(ThemeContext);
  return (
    <Container data-testid='header'>
      <Content>

        Where in the World?
      <ButtonTheme
          changeTheme={changeTheme}
          title={title}
        />
      </Content>
    </Container>
  );
}
