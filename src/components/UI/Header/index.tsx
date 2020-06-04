import React, { useContext } from 'react';

import { Container } from './styles';
import { ThemeContext } from 'styled-components';
import { TypesHeader } from './types';

const Header: React.FC<TypesHeader> = ({ changeTheme }) => {
  const { title } = useContext(ThemeContext);
  return (
    <Container>
      Hello World
      <button onClick={changeTheme}>{title} mode</button>
    </Container>
  );
}

export default Header;